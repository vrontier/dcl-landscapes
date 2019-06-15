///////////////////////////////////////////////////////////////////////////////////////////
//
//              DCL LANDSCAPES - An open library for programmed landscapes
//
///////////////////////////////////////////////////////////////////////////////////////////

// Master control switch for logging
let logging: boolean = true

// Model repository item
interface EntityRepositoryItem {
    modelId: number
    fileName: string
}
interface EntityRepositoryItems extends Array<EntityRepositoryItem>{}

// Repository class
export class EntityRepository {
    private _dataSet: EntityRepositoryItems = [
        { modelId: 24, fileName: 'bldg_0001_inner_corner_v01.gltf' },
        { modelId: 32, fileName: 'bldg_0001_innercorner_v01.gltf' },
        { modelId: 34, fileName: 'bldg_0001_innercorner_v02.gltf' },
        { modelId: 38, fileName: 'bldg_0001_innercorner_v03.gltf' },
        { modelId: 26, fileName: 'bldg_0002_outer_corner_v01.gltf' },
        { modelId: 30, fileName: 'bldg_0002_outercorner_v01.gltf' },
        { modelId: 36, fileName: 'bldg_0002_outercorner_v02.gltf' },
        { modelId: 48, fileName: 'bldg_0002_outercorner_v03.gltf' },
        { modelId: 1, fileName: 'bldg_0003_length_v01.gltf' },
        { modelId: 28, fileName: 'bldg_0003_length_v02.gltf' },
        { modelId: 17, fileName: 'bridge_0001_center_v01.gltf' },
        { modelId: 19, fileName: 'bridge_0001_center_v02.gltf' },
        { modelId: 21, fileName: 'bridge_0002_length_v01.gltf' },
        { modelId: 11, fileName: 'bridge_0003_ramp_v01.gltf' },
        { modelId: 6, fileName: 'bridge_0004_fork_v01.gltf' },
        { modelId: 4, fileName: 'bridge_0005_turn_v01.gltf' },
        { modelId: 42, fileName: 'ramp_0003_spiral_v03.gltf' },
        { modelId: 44, fileName: 'ramp_0003_spiral_v04.gltf' },
        { modelId: 46, fileName: 'ramp_0004_test_v01.gltf' },
        { modelId: 50, fileName: 'townhouse_0001_coffin_v03.gltf' },
        { modelId: 39, fileName: 'townhouse_0003_v01.gltf' },
        { modelId: 7, fileName: 'tunnel_0001_center_v01.gltf' },
        { modelId: 13, fileName: 'tunnel_0002_length_v01.gltf' },
        { modelId: 2, fileName: 'tunnel_0003_ramp_v01.gltf' },
        { modelId: 12, fileName: 'tunnel_0004_fork_v01.gltf' },
    ]

    public modelFileName(modelId: number): string {
        for (let entry of this._dataSet) {
            if (entry.modelId == modelId)
                return entry.fileName
        }

    }
}

// Interface for relative positioning of one entity within a layer
interface EntityPositionInLayerItem {
    id: number
    entityId: number
    position: Vector3
    rotation: Quaternion
}

// Interface for element index in raw data
interface RawDataElementIndex {
    position: number
    entityId: number
    elevationInLayer: number
    rotation: number
}

// Class containing DCL LANDSCAPES layer data
export class Layer {
    private _rawDatapoint: RawDataElementIndex = {position: 0, entityId: 1, elevationInLayer: 2, rotation: 3}
    private _rawDatapointCount: number = 4
    private _name: string
    private _rawData: string
    private _position: Vector3
    private _cellSize: number
    private _pivotPosition: Vector3
    private _entityPositionInLayer: EntityPositionInLayerItem[]

    constructor(name: string, rawData: string, position: Vector3, pivotPosition: Vector3, cellSize: number) {
        this._name = name
        this._rawData = rawData
        this._position = position
        this._pivotPosition = pivotPosition
        this._cellSize = cellSize
        this._entityPositionInLayer = []

        // Parse raw data into layer structure
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

    set pivotPosition(newPivotPosition: Vector3) {
        this._pivotPosition = newPivotPosition
    }
    get pivotPosition(): Vector3 {
        return this._pivotPosition
    }

    set cellSize(newCellSize: number) {
        this._cellSize = newCellSize
    }
    get cellSize(): number {
        return this._cellSize
    }

    get entityPosition(): EntityPositionInLayerItem[] {
        return this._entityPositionInLayer
    }

    private parseRawData(toProcess: string) {
        let arrayId: number = 0
        let rawDataArray: string[] = toProcess.split("\n")
        for (let entry in rawDataArray) {
            let rawDataEntryArray: string[] = rawDataArray[entry].split(" ")
            if (rawDataEntryArray.length < this._rawDatapointCount) {
                log("Warning: entry '" + rawDataArray[entry] + "' does not contain " + this._rawDatapoint + " data points!")
            } else {
                // Parse raw data into structure
                let entityRotation: Quaternion = new Quaternion(0, 0, 0, 0)
                if ((rawDataEntryArray[this._rawDatapoint['rotation']].split(",").length == 3)) {
                    entityRotation = Quaternion.Euler(
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[0]),
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[1]),
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[2])
                    )
                } else if ((rawDataEntryArray[this._rawDatapoint['rotation']].split(",").length == 4)) {
                    entityRotation = new Quaternion(
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[0]),
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[1]),
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[2]),
                        parseInt(rawDataEntryArray[this._rawDatapoint['rotation']].split(",")[3])
                    )
                }
                this._entityPositionInLayer.push(
                    {
                        id: arrayId,
                        entityId: parseInt(rawDataEntryArray[this._rawDatapoint['entityId']]),
                        position: new Vector3(
                            parseInt(rawDataEntryArray[this._rawDatapoint['position']].split(",")[0]),
                            parseInt(rawDataEntryArray[this._rawDatapoint['elevationInLayer']]),
                            parseInt(rawDataEntryArray[this._rawDatapoint['position']].split(",")[1])
                        ),
                        rotation: entityRotation
                    }
                )
                arrayId++
            }
        }
    }

}

export function placeLayer(layer: Layer){
    if (logging) log("placeLayer() of '" + layer.name + "'")

    let entityRepository: EntityRepository = new EntityRepository()

    for (let entity of layer.entityPosition) {
        let modelFileName: string = 'models/building/' + entityRepository.modelFileName(entity.entityId)
        if (logging) log("Positioning model id #" + entity.entityId + " '" + modelFileName + "' at (" + (entity.position.x * 16 + 8) + ", " + entity.position.y + ", " + (entity.position.x * 16 + 8) +")")

        let building: Entity = new Entity()
        building.addComponent(new GLTFShape(modelFileName))
        building.addComponent(new Transform({
            position: new Vector3(entity.position.x * 16 + 8, entity.position.y, entity.position.z * 16 + 8),
            scale: new Vector3(1, 1, 1),
            rotation: entity.rotation
        }))
        engine.addEntity(building)
    }
}


export function landScaping(landscape:number[][], startFromPosition:Vector3, density:number, randomPosition:Boolean, offSetX:number[], offSetZ:number[]){
    let scapedLand:Vector3[] = []
    let mapX:number = 0
    for (let x in landscape) {
        let mapZ:number = 0
        for (let z in landscape[x]) {
            let offSetXValue = 0
            let offSetZValue = 0
            if (randomPosition) {
                offSetXValue = Math.random() * (offSetX[1] - offSetX[0]) + offSetX[0]
                offSetZValue = Math.random() * (offSetZ[1] - offSetZ[0]) + offSetZ[0]
            }
            let elementPosition:Vector3 = startFromPosition.add(new Vector3(mapX * density + offSetXValue, 0, mapZ * density + offSetZValue))
            if (landscape[x][z] > 0) {
                scapedLand.push(elementPosition)
            }
            mapZ += 1
        }
        mapX += 1
    }
    return scapedLand
}

export function createCloud(position: Vector3, dimension: Vector3, rotation:Vector3, cloudMaterial: Material):Entity {
    let cloud:Entity = new Entity()
    let cloudShape:BoxShape = new BoxShape()
    //cloudShape.withCollisions = false
    cloud.addComponent(cloudShape)
    cloud.addComponent(cloudMaterial)
    cloud.addComponent(
        new Transform({
            position: position,
            scale: dimension,
            rotation: Quaternion.Euler(rotation.x, rotation.y, rotation.z)
        })
    )
    engine.addEntity(cloud)
    return cloud
}

export function terrain(parcelsX: number, parcelsZ: number) {
    const terrainMaterial0 = new Material()
    terrainMaterial0.albedoColor = new Color3(.5216, .3412, .1373)
    terrainMaterial0.metallic = 0.0
    terrainMaterial0.roughness = 0.6
    terrainMaterial0.disableLighting = false

    const terrainMaterial1 = new Material()
    terrainMaterial1.albedoColor = new Color3(.38, .2, .09)
    terrainMaterial1.metallic = 0.0
    terrainMaterial1.roughness = 0.6
    terrainMaterial1.disableLighting = false

    let panelX:number = 8
    let panelZ:number = 8

    for (let x = 0; x < parcelsX*16/panelX; x++) {
        for (let z = 0; z < parcelsZ*16/panelZ; z++) {
            let terrain:Entity = new Entity()
            let terrainShape:BoxShape = new BoxShape()
            //terrainShape.withCollisions = true
            terrain.addComponent(terrainShape)
            if (Math.random() * (1.0 - 0) + 0 > 0.5) {
                terrain.addComponent(terrainMaterial0)
            } else {
                terrain.addComponent(terrainMaterial1)
            }
            terrain.addComponent(
                new Transform({
                    position: new Vector3(x*panelX+panelX/2,0,z*panelZ+panelZ/2),
                    scale: new Vector3(panelX,Math.random() * (0.6 - 0.05) + 0,panelZ),
                    rotation: Quaternion.Euler(0,0,0)
                })
            )
            engine.addEntity(terrain)
        }
    }
}

export function createSurveyorsRod(position: Vector3, angle: Quaternion, height: number, precision: number) {
    const materialBlack = new Material()
    materialBlack.albedoColor = new Color3(0, 0, 0)
    materialBlack.metallic = 1.0
    materialBlack.roughness = 0.6
    materialBlack.disableLighting = false

    const materialYellow = new Material()
    materialYellow.albedoColor = new Color3(0.5, 0.97, 1.0)
    materialYellow.metallic = 1.0
    materialYellow.roughness = 0.6
    materialYellow.disableLighting = false

    let lastColorIsBlack:Boolean = true

    for (let x = 0; x < height / precision; x++) {

        let rodSectionPosition:Vector3 = position
        let rodSectionDimension:Vector3 = new Vector3(1, precision, 1)

        let rodSection: Entity = new Entity()
        let myBoxShape: BoxShape = new BoxShape()
        //myBoxShape.withCollisions = false
        rodSection.addComponent(myBoxShape)
        if (lastColorIsBlack) {
            rodSection.addComponent(materialYellow)
        } else {
            rodSection.addComponent(materialBlack)
        }
        rodSection.addComponent(
            new Transform({
                position: rodSectionPosition,
                scale: rodSectionDimension,
                rotation: angle
            })
        )

        engine.addEntity(rodSection)

    }
}