# DCL Landscapes

![Cryptovrontier and Ile's DCL Landscapes](https://github.com/vrontier/assets/blob/master/dcl-landscapes/dcl-landscapes-demoland.jpg)

## Description
DCL Landscapes is an an open source Library for programming virtual reality landscapes in <a href="http://www.decentraland.org">Decentraland</a> using its <a href="https://github.com/decentraland/ecs-reference">ECS API</a>. 
It was incepted for the Decentraland Hackathon June 2019.

The library contains architectural models in gltf format created by <a href="https://github.com/iillee">ile (iillee@GitHub)</a> and placement and landscaping functionality in Typescript created by <a href="https://github.com/vrontier">VRontier</a>.

<a href="http://www.cryptoquest.io:8090">Demoland</a>, our Hackathon contribution scene was created using DCL Landscapes.

With DCL Landscapes, user can create 

* Architectural scenes based on the library's prefabricated, modular building blocks or on user generated gltf models
* Terrains and randomized model placements, e.g. for forest 
* Animated layers based on rotation or an animation path

The design philosophy behind  DCL Landscapes is to provide a modular building system which can be arranged, placed and animated in layers. Layers will typically hold the elements of a specific theme or domain, e.g. models belonging to one building system or the terrain or a forest. Layers can be combined with each other without any constraints by DCL Landscapes.   

## Library structure
The libray consists of the following elements:
* Folder <a href="https://github.com/vrontier/dcl-landscape-designer/tree/master/docs/">`docs/`</a> contains documentation
* Folder <a href="https://github.com/vrontier/dcl-landscape-designer/tree/master/models/">`models/`</a> contains gltf models provided with the library (Apache 2.0 license)
* Folder <a href="https://github.com/vrontier/dcl-landscape-designer/tree/master/src/">`src/`</a> contains a sample `game.ts` using the DCL Landscapes library
* Folder <a href="https://github.com/vrontier/dcl-landscape-designer/tree/master/src/dcl-landscapes/">`src/dcl-landscapes/`</a> contains the DCL Landscapes library files
  * File `library.ts` holds the functions provided by the DCL Landscapes library

## Library features
* `Layer` class containing layer meta data (dimensions, cell size, position, scale etc.) and the resource/model placements (e.g. cell coordinate, resourced id; elevation in layer, rotation etc.)
* `placeLayer` function for placing a layer and its components in scene
* `randomizeLayer` function for randomizing position and rotation of an individual resource/model within the cells of a layer
* `placeFloor` function for placing a simple floor tile on the ground of a scene

In its current version, rotation and animation along a path are implemented only in the web-based DCL Landscaper. This function will be transfered to the library as well. The features however are encoded in the generated `game.ts` file and therefore available for users to include into their scenes.

## How-to
1. Create directory `src\dcl-landscapes` in your local Decentraland installation and copy GitHub `src\dcl-landscapes\*` into it.
2. If you want to use the DCL Landscapes models, copy the GitHub `models` folder into your local installation.
3. Take `src\dcl-landscapes.ts` as an example to start building your own DCL Landscapes scene.

## Outlook
We have had great fun imagining and creating this very first version of the DCL Landscapes library. There are a number of functionalities we want to realise in its next version like having additional models and additional resource types to place (NFTs, graphics and video at some time), we also want to extend the existing functions to address additional properties like randomize the scale of entities. And last but not least, we want to replace the makeshift DCL Landscaper with a more user friendly, graphical tool that can be run on the local scene.   

**Happy building and hacking!**<br/>
Mike (Cryptovrontier) and Luke (ile)
