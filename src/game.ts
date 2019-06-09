// Building library
import {createCloud, landScaping, terrain} from "./dcl-landscaping/library" 

let building_1_path:string = "models/building/bridge_0001_center_v01.gltf"
let building_1:Entity = new Entity()
building_1.addComponent(new GLTFShape(building_1_path))
building_1.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(building_1)