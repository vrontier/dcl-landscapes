// *********************************************************************************************************************
//
//                                 Mike Quest (Cryptovrontier) & Luke Escobar (ile)
//                            DCL LANDSCAPES - an open library for programmed landscapes
//
// *********************************************************************************************************************
import * as dclLandscapes from "./dcl-landscapes/library"

// Variable taking positioning raw data
let layerRawData: string = ""

// Create model repository
let entityRepositoryItems: dclLandscapes.EntityRepositoryItems = [
    { id: 2, type: 'gltf', fileName: 'building_bridge-length_v01.gltf' },
    { id: 3, type: 'gltf', fileName: 'building_townhouse-base_v01.gltf' },
    { id: 5, type: 'gltf', fileName: 'building_townhouse-coffin_v01.gltf' },
    { id: 11, type: 'gltf', fileName: 'building_tunnel-ramp_v01.gltf' },
    { id: 12, type: 'gltf', fileName: 'building_tunnel-length_v01.gltf' },
    { id: 13, type: 'gltf', fileName: 'nature_cloud-10_v01.gltf' },
    { id: 14, type: 'gltf', fileName: 'building_bridge-center_v01.gltf' },
    { id: 15, type: 'gltf', fileName: 'nature_cloud-04_v01.gltf' },
    { id: 18, type: 'gltf', fileName: 'building_bldg-outercorner_v01.gltf' },
    { id: 19, type: 'gltf', fileName: 'nature_cloud-08_v01.gltf' },
    { id: 20, type: 'gltf', fileName: 'building_ramp-yellow_v01.gltf' },
    { id: 21, type: 'gltf', fileName: 'nature_cloud-02_v01.gltf' },
    { id: 22, type: 'gltf', fileName: 'building_ramp-red_v01.gltf' },
    { id: 25, type: 'gltf', fileName: 'nature_cloud-09_v01.gltf' },
    { id: 26, type: 'gltf', fileName: 'nature_cloud-06_v01.gltf' },
    { id: 29, type: 'gltf', fileName: 'building_tunnel-fork_v01.gltf' },
    { id: 30, type: 'gltf', fileName: 'nature_cloud-03_v01.gltf' },
    { id: 31, type: 'gltf', fileName: 'nature_cloud-05_v01.gltf' },
    { id: 34, type: 'gltf', fileName: 'building_bridge-fork_v01.gltf' },
    { id: 35, type: 'gltf', fileName: 'building_bridge-ramp_v01.gltf' },
    { id: 39, type: 'gltf', fileName: 'building_bldg-length_v01.gltf' },
    { id: 40, type: 'gltf', fileName: 'nature_cloud-07_v01.gltf' },
    { id: 43, type: 'gltf', fileName: 'building_bldg-innercorner_v01.gltf' },
    { id: 49, type: 'gltf', fileName: 'building_bridge-turn_v01.gltf' },
    { id: 50, type: 'gltf', fileName: 'nature_cloud-01_v01.gltf' },
    { id: 51, type: 'gltf', fileName: 'building_tunnel-turn_v01.gltf' },
    { id: 54, type: 'gltf', fileName: 'building_tunnel-center_v01.gltf' },
    { id: 56, type: 'gltf', fileName: 'building_townhouse-base_v03.gltf' },
    { id: 58, type: 'gltf', fileName: 'building_townhouse-base_v02.gltf' },
    { id: 59, type: 'gltf', fileName: 'terrain_massing2_v01.gltf' },
    { id: 61, type: 'gltf', fileName: 'terrain_massing1_v01.gltf' },
    { id: 65, type: 'gltf', fileName: 'art_text-dcllandscapes_v01.gltf' },
    { id: 66, type: 'gltf', fileName: 'art_text-ile_v01.gltf' },
    { id: 67, type: 'gltf', fileName: 'art_text-cryptovrontier_v01.gltf' },
    { id: 71, type: 'gltf', fileName: 'building_townhouse-deathstar_v01.gltf' },
    { id: 73, type: 'gltf', fileName: 'nature_tree-basic_v01.gltf' },
    { id: 74, type: 'gltf', fileName: 'nature_tree-abstract_v01.gltf' }
]
let entityRepository: dclLandscapes.EntityRepository = new dclLandscapes.EntityRepository(entityRepositoryItems)

// *********************************************************************************************************************
//
// Layer "Rotation Test" - Definition and Placement
//
// *********************************************************************************************************************

layerRawData =
    "0,0 43\n"
    + "0,1 43\n"
    + "1,0 43\n"
    + "1,1 43"

let modularLandscape1: dclLandscapes.Layer = new dclLandscapes.Layer(
    "Rotation Test",
    new Vector3(2,0,2),
    layerRawData,
    new Vector3(40,0,40),
    Quaternion.Euler(0,0,0),
    16,
    new Vector3(1,1,1),
    true
)

// dclLandscapes.placeLayer(dclLandscapes.randomizeLayer(
//     modularLandscape1,
//     new Vector3(0,0,0),
//     new Vector3(0,0,0)),
//     entityRepository
// )

// *********************************************************************************************************************
//
// Layer "Rotation Test" - Rotation
//
// *********************************************************************************************************************

export class layerRotate implements ISystem {
    update() {
        let transform = modularLandscape1.entity.getComponent(Transform)
        transform.rotate(new Vector3(0,1,0), 1)
    }
}

// engine.addSystem(new layerRotate())

// *********************************************************************************************************************
//
// Scene Floor
//
// *********************************************************************************************************************

const floorMaterial = new Material()
floorMaterial.albedoColor = new Color3(.498,.78,.588)
floorMaterial.metallic = 0.1
floorMaterial.roughness = 0.1

// dclLandscapes.placeFloor(new Vector3(8*16,-0.09,8*16), new Vector3(16*16, 0.01, 16*16), floorMaterial)
