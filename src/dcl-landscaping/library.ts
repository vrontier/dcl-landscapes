///////////////////////////////////////////////////////////////////////////////////////////
//
//                              DCL Open Landscaper Library
//
///////////////////////////////////////////////////////////////////////////////////////////

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
    cloudShape.withCollisions = false
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
            terrainShape.withCollisions = true
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
        myBoxShape.withCollisions = false
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