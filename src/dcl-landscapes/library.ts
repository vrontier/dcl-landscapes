////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                            DCL LANDSCAPES - An open library for programmed landscapes
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Master control switch for logging
let logging: boolean = true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// DCL LANDSCAPES model repository
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Model directory
let modelDirectory: string = "models/"

// Model repository item
interface EntityRepositoryItem {
    modelId: number
    fileName: string
}
interface EntityRepositoryItems extends Array<EntityRepositoryItem>{}

// Repository class
export class EntityRepository {
    private _dataSet: EntityRepositoryItems = [
        { modelId: 24, fileName: 'building/bldg_0001_inner_corner_v01.gltf' },
        { modelId: 32, fileName: 'building/bldg_0001_innercorner_v01.gltf' },
        { modelId: 34, fileName: 'building/bldg_0001_innercorner_v02.gltf' },
        { modelId: 38, fileName: 'building/bldg_0001_innercorner_v03.gltf' },
        { modelId: 26, fileName: 'building/bldg_0002_outer_corner_v01.gltf' },
        { modelId: 30, fileName: 'building/bldg_0002_outercorner_v01.gltf' },
        { modelId: 36, fileName: 'building/bldg_0002_outercorner_v02.gltf' },
        { modelId: 48, fileName: 'building/bldg_0002_outercorner_v03.gltf' },
        { modelId: 1, fileName: 'building/bldg_0003_length_v01.gltf' },
        { modelId: 28, fileName: 'building/bldg_0003_length_v02.gltf' },
        { modelId: 17, fileName: 'building/bridge_0001_center_v01.gltf' },
        { modelId: 19, fileName: 'building/bridge_0001_center_v02.gltf' },
        { modelId: 21, fileName: 'building/bridge_0002_length_v01.gltf' },
        { modelId: 11, fileName: 'building/bridge_0003_ramp_v01.gltf' },
        { modelId: 6, fileName: 'building/bridge_0004_fork_v01.gltf' },
        { modelId: 4, fileName: 'building/bridge_0005_turn_v01.gltf' },
        { modelId: 42, fileName: 'building/ramp_0003_spiral_v03.gltf' },
        { modelId: 44, fileName: 'building/ramp_0003_spiral_v04.gltf' },
        { modelId: 46, fileName: 'building/ramp_0004_test_v01.gltf' },
        { modelId: 50, fileName: 'building/townhouse_0001_coffin_v03.gltf' },
        { modelId: 39, fileName: 'building/townhouse_0003_v01.gltf' },
        { modelId: 7, fileName: 'building/tunnel_0001_center_v01.gltf' },
        { modelId: 13, fileName: 'building/tunnel_0002_length_v01.gltf' },
        { modelId: 2, fileName: 'building/tunnel_0003_ramp_v01.gltf' },
        { modelId: 12, fileName: 'building/tunnel_0004_fork_v01.gltf' },
        { modelId: 100, fileName: 'nature/cloud_0001.gltf' },
        { modelId: 101, fileName: 'nature/tree_0001.gltf' }
    ]

    public modelFileName(modelId: number): string {
        for (let entry of this._dataSet) {
            if (entry.modelId == modelId)
                return entry.fileName
        }

    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// DCL LANDSCAPES layer data
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Interface for relative positioning of one entity within a layer
interface EntityPositionInLayerItem {
    id: number
    entityId: number
    position: Vector3
    rotation: Quaternion,
    scale: Vector3
}

// Interface for element index in raw data
interface RawDataElementIndex {
    position: number
    entityId: number
    elevationInLayer: number
    rotation: number
    scale: number
}

export class Layer {
    private _rawDatapoint: RawDataElementIndex = {position: 0, entityId: 1, elevationInLayer: 2, rotation: 3, scale: 4}
    private _rawDatapointCountMinimum: number = 2 // minimum raw data be the layer cell coordinate (x,z) and model id
    private _name: string
    private _rawData: string
    private _position: Vector3
    private _rotation: Quaternion
    private _cellSize: number
    private _scale: Vector3
    private _entityPositionInLayer: EntityPositionInLayerItem[]

    constructor(name: string, rawData: string, position: Vector3, rotation: Quaternion, cellSize: number, scale: Vector3) {
        this._name = name
        this._rawData = rawData
        this._position = position
        this._rotation = rotation
        this._cellSize = cellSize
        this._scale = scale

        // Parse raw data into layer structure
        this._entityPositionInLayer = []
        this.parseRawData(rawData)
    }

    set name(newName: string) {
        this._name = newName
    }
    get name(): string {
        return this._name
    }

    set rawData(rawData: string) {
        this._rawData = rawData
    }
    get rawData(): string {
        return this._rawData
    }

    set position(newPosition: Vector3) {
        this._position = newPosition
    }
    get position(): Vector3 {
        return this._position
    }

    set rotation(newRotation: Quaternion) {
        this._rotation = newRotation
    }
    get rotation(): Quaternion {
        return this._rotation
    }

    set cellSize(newCellSize: number) {
        this._cellSize = newCellSize
    }
    get cellSize(): number {
        return this._cellSize
    }

    set scale(newScale: Vector3) {
        this._scale = newScale
    }
    get scale(): Vector3 {
        return this._scale
    }

    get entityArray(): EntityPositionInLayerItem[] {
        return this._entityPositionInLayer
    }

    retrieveEntity(id: number): EntityPositionInLayerItem {
        if (id >= 0 && id <= this._entityPositionInLayer.length)
            return this._entityPositionInLayer[id]
        else
            return null
    }

    updateEntity(id: number, updatedEntity: EntityPositionInLayerItem): boolean {
        if (id >= 0 && id <= this._entityPositionInLayer.length) {
            this._entityPositionInLayer[id] = updatedEntity
            return true
        } else
            return false
    }


    private parseRawData(toProcess: string) {
        let arrayId: number = 0
        let rawDataArray: string[] = toProcess.split("\n")
        for (let entry in rawDataArray) {
            let rawDataEntryArray: string[] = rawDataArray[entry].split(" ")
            if (rawDataEntryArray.length < this._rawDatapointCountMinimum) {
                log("Warning: entry '" + rawDataArray[entry] + "' does not contain the min. set data points " +
                    "which are layer cell coordinate (x,z) and the model id!")
            } else {
                // Parse raw data into structure
                if (logging) log(rawDataEntryArray.length)

                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Position 1: relative cell coordinates (x,z)
                //
                // Default relative x and z position is the upper left cell (0,0) of the layer which in meter
                // is the cell length and width divided by two and the y coordinate of the layer's position.
                // Relative elevation y is defaulted to 0 meaning 0m to add to the elevation of the layer
                let entityCellCoordinateInLayer: Vector3 = new Vector3((this._cellSize / 2), 0, (this._cellSize / 2))
                if (rawDataEntryArray[this._rawDatapoint['position']].split(",").length == 2) {
                    entityCellCoordinateInLayer = new Vector3(
                        // relative x coordinate of the cell
                        parseInt(rawDataEntryArray[this._rawDatapoint['position']].split(",")[0]),
                        // relative y to layer elevation in meter is 0, may be set if elevation is present in raw data
                        0,
                        // relative z coordinate of the cell
                        parseInt(rawDataEntryArray[this._rawDatapoint['position']].split(",")[1])
                    )
                }

                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Position 2: entity reference id
                //
                // Entity id is the reference to the gltf model, sound or native DCL entity, defaults to a cube (id 0)
                // of dimension 1 meter by 1 meter by 1 meter
                let entityId: number = 0
                if (parseInt(rawDataEntryArray[this._rawDatapoint['entityId']]) > 0) {
                    entityId = parseInt(rawDataEntryArray[this._rawDatapoint['entityId']])
                }

                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Position 3: (optional) elevation
                //
                // Elevation of the entity relative to the layer's elevation from ground in meters
                if (rawDataEntryArray.length >= 3) {
                    entityCellCoordinateInLayer.y = parseFloat(rawDataEntryArray[this._rawDatapoint['elevationInLayer']])
                }

                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Position 4: (optional) rotation
                //
                // Check out if the raw data has 3 elements (Euler) or 4 elements (Quaternion) and do the
                // necessary transformation from Euler to Quaternion.
                // In case something else or no data has been provided, set rotation to (0, 0, 0, 0).
                let entityRotation: Quaternion = new Quaternion(0, 0, 0, 0)
                if (rawDataEntryArray.length >= 4) {
                    if ((rawDataEntryArray[this._rawDatapoint['rotation']].split(",").length == 3)) {
                        entityRotation = Quaternion.Euler(
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[0]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[1]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[2])
                        )
                    } else if ((rawDataEntryArray[this._rawDatapoint['rotation']].split(",").length == 4)) {
                        entityRotation = new Quaternion(
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[0]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[1]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[2]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[3])
                        )
                    }
                }

                ////////////////////////////////////////////////////////////////////////////////////////////////////////
                // Position 5: (optional) scale
                //
                // Scale of the entity in the layer
                let entityScale: Vector3 = new Vector3(1, 1, 1)
                if (rawDataEntryArray.length >= 5) {
                    if ((rawDataEntryArray[this._rawDatapoint['scale']].split(",").length == 3)) {
                        entityScale = new Vector3(
                            parseFloat(rawDataEntryArray[this._rawDatapoint['scale']].split(",")[0]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['scale']].split(",")[1]),
                            parseFloat(rawDataEntryArray[this._rawDatapoint['scale']].split(",")[2])
                        )
                    }
                    if (logging) log(rawDataEntryArray[this._rawDatapoint['scale']])
                }

                // Bring it all together in the layer's entity array
                this._entityPositionInLayer.push(
                    {
                        // Array index
                        id: arrayId,
                        // Unique id referencing the entity to place
                        entityId: entityId,
                        // Relative position of the entity in the layer's position
                        position: entityCellCoordinateInLayer,
                        // Relative rotation of the entity in in relation to the layer's absolute rotation
                        rotation: entityRotation,
                        // Relative scale
                        scale: entityScale
                    }
                )

                // Increment array index
                arrayId++
            }
        }
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// DCL LANDSCAPES layer placement
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function placeLayer(layer: Layer){
    if (logging) log("placeLayer() of '" + layer.name + "', containing " + layer.entityArray.length + " entities.")

    // Source library models
    let entityRepository: EntityRepository = new EntityRepository()

    // Create parent layer entity and add it to the system
    let layerParentEntity: Entity = new Entity()
    engine.addEntity(layerParentEntity)

    // Create an array for the children
    let layerChildArray: Entity[] = new Array()

    // Position all entities of a layer
    for (let entity of layer.entityArray) {

        // Scale it
        let entityFileName: string = modelDirectory + entityRepository.modelFileName(entity.entityId)
        let entityPosition: Vector3 = new Vector3(
            entity.position.x * layer.cellSize + layer.cellSize/2 ,
            entity.position.y,
            entity.position.z * layer.cellSize + layer.cellSize/2
        )
        let entityScale: Vector3 = entity.scale
        let entityRotation: Quaternion = entity.rotation

        // Create, position, scale and rotate layer child entities
        const layerChildEntity: Entity = new Entity()
        layerChildEntity.setParent(layerParentEntity)
        layerChildEntity.addComponent(new GLTFShape(entityFileName))
        layerChildEntity.addComponent(new Transform({
            position: entityPosition,
            scale: entityScale,
            rotation: entityRotation
        }))
        engine.addEntity(layerChildEntity)

    }

    // Position, scale and rotate parent layer entity
    layerParentEntity.addComponent(new Transform({
        position: layer.position,
        scale: layer.scale,
        rotation: layer.rotation
    }))
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// DCL LANDSCAPES design entity landscapes with optional random % offsets from layer cell center
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// move and rotate entities randomly within given ranges
export function landscapeLayer(layer: Layer, positionVariation: Vector3, rotationVariation: Vector3): Layer {
    let moveX: number = 0
    let moveY: number = 0 // will stay 0 as there is no point in changing the elevation
    let moveZ: number = 0
    let turnX: number = 0
    let turnY: number = 0
    let turnZ: number = 0
    // let turnW: number = 0
    for (let entity of layer.entityArray) {

        // Let the magic random happen
        if (positionVariation.x > 0) {
            moveX = positionVariation.x * ( Math.random() * ((layer.cellSize / 2) - 0) + 0 )
        }
        if (positionVariation.z > 0) {
            moveZ = positionVariation.z * ( Math.random() * ((layer.cellSize / 2) - 0) + 0 )
        }
        if (rotationVariation.x > 0) {
            turnX = entity.rotation.eulerAngles.x + rotationVariation.x * ( Math.random() * (360 - 0) + 0 )
        }
        if (rotationVariation.y > 0) {
            turnY = entity.rotation.eulerAngles.y + rotationVariation.y * ( Math.random() * (360 - 0) + 0 )
        }
        if (rotationVariation.z > 0) {
            turnZ = entity.rotation.eulerAngles.z + rotationVariation.z * ( Math.random() * (360 - 0) + 0 )
        }
        // if (rotationVariation.w > 0) {
        //     turnW = rotationVariation.w * ( Math.random() * (360 - 0) + 0 )
        // }

        // Show old and new position
        if (logging) {
            log("Entity id " + entity.id + " position: old=" + entity.position + ", new=" + entity.position.add(new Vector3(moveX, moveY, moveZ)) + ", moveX=" + moveX + ", moveZ=" + moveZ)
        }

        // Update layer entity
        entity.position = entity.position.add(new Vector3(moveX, moveY, moveZ))
        entity.rotation = Quaternion.Euler(turnX, turnY, turnZ)
        layer.updateEntity(entity.id, entity)
    }
    return layer
}

// export function createCloud(position: Vector3, dimension: Vector3, rotation:Vector3, cloudMaterial: Material):Entity {
//     let cloud:Entity = new Entity()
//     let cloudShape:BoxShape = new BoxShape()
//     //cloudShape.withCollisions = false
//     cloud.addComponent(cloudShape)
//     cloud.addComponent(cloudMaterial)
//     cloud.addComponent(
//         new Transform({
//             position: position,
//             scale: dimension,
//             rotation: Quaternion.Euler(rotation.x, rotation.y, rotation.z)
//         })
//     )
//     engine.addEntity(cloud)
//     return cloud
// }
//
// export function terrain(parcelsX: number, parcelsZ: number) {
//     const terrainMaterial0 = new Material()
//     terrainMaterial0.albedoColor = new Color3(.5216, .3412, .1373)
//     terrainMaterial0.metallic = 0.0
//     terrainMaterial0.roughness = 0.6
//     terrainMaterial0.disableLighting = false
//
//     const terrainMaterial1 = new Material()
//     terrainMaterial1.albedoColor = new Color3(.38, .2, .09)
//     terrainMaterial1.metallic = 0.0
//     terrainMaterial1.roughness = 0.6
//     terrainMaterial1.disableLighting = false
//
//     let panelX:number = 8
//     let panelZ:number = 8
//
//     for (let x = 0; x < parcelsX*16/panelX; x++) {
//         for (let z = 0; z < parcelsZ*16/panelZ; z++) {
//             let terrain:Entity = new Entity()
//             let terrainShape:BoxShape = new BoxShape()
//             //terrainShape.withCollisions = true
//             terrain.addComponent(terrainShape)
//             if (Math.random() * (1.0 - 0) + 0 > 0.5) {
//                 terrain.addComponent(terrainMaterial0)
//             } else {
//                 terrain.addComponent(terrainMaterial1)
//             }
//             terrain.addComponent(
//                 new Transform({
//                     position: new Vector3(x*panelX+panelX/2,0,z*panelZ+panelZ/2),
//                     scale: new Vector3(panelX,Math.random() * (0.6 - 0.05) + 0,panelZ),
//                     rotation: Quaternion.Euler(0,0,0)
//                 })
//             )
//             engine.addEntity(terrain)
//         }
//     }
// }
//
// export function createSurveyorsRod(position: Vector3, angle: Quaternion, height: number, precision: number) {
//     const materialBlack = new Material()
//     materialBlack.albedoColor = new Color3(0, 0, 0)
//     materialBlack.metallic = 1.0
//     materialBlack.roughness = 0.6
//     materialBlack.disableLighting = false
//
//     const materialYellow = new Material()
//     materialYellow.albedoColor = new Color3(0.5, 0.97, 1.0)
//     materialYellow.metallic = 1.0
//     materialYellow.roughness = 0.6
//     materialYellow.disableLighting = false
//
//     let lastColorIsBlack:Boolean = true
//
//     for (let x = 0; x < height / precision; x++) {
//
//         let rodSectionPosition:Vector3 = position
//         let rodSectionDimension:Vector3 = new Vector3(1, precision, 1)
//
//         let rodSection: Entity = new Entity()
//         let myBoxShape: BoxShape = new BoxShape()
//         //myBoxShape.withCollisions = false
//         rodSection.addComponent(myBoxShape)
//         if (lastColorIsBlack) {
//             rodSection.addComponent(materialYellow)
//         } else {
//             rodSection.addComponent(materialBlack)
//         }
//         rodSection.addComponent(
//             new Transform({
//                 position: rodSectionPosition,
//                 scale: rodSectionDimension,
//                 rotation: angle
//             })
//         )
//
//         engine.addEntity(rodSection)
//
//     }
// }