// *********************************************************************************************************************
//
// Cryptovrontier and Ile's DCL Landscapes Library
//
// *********************************************************************************************************************
import {Layer, randomizeLayer, placeLayer, placeFloor} from "./dcl-landscapes/library"

// Variable taking positioning raw data
let layerRawData: string = ""

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

let modularLandscape1: Layer = new Layer(
    "Rotation Test",
    new Vector3(2,0,2),
    layerRawData,
    new Vector3(40,0,40),
    Quaternion.Euler(0,0,0),
    16,
    new Vector3(1,1,1),
    true
)

placeLayer(randomizeLayer(modularLandscape1, new Vector3(0,0,0), new Vector3(0,0,0)))

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

engine.addSystem(new layerRotate())

//////////////////

const floorMaterial = new Material()
floorMaterial.albedoColor = new Color3(.32,.48,.46)
floorMaterial.metallic = 0.1
floorMaterial.roughness = 0.1

placeFloor(new Vector3(8*16,-0.09,8*16), new Vector3(16*16, 0.01, 16*16), floorMaterial)