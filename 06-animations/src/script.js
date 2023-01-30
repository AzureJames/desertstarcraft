import * as THREE from 'three'
import gsap from 'gsap'
import CubeStack from './cubestack'

// //orbitcontrols
// // Canvas
const canvas = document.querySelector('canvas.webgl')

// // Scene
const scene = new THREE.Scene()

// Sizes
const sizes = {
    width: 800,
    height: 600
}

 // Camera
const aspectRatio = sizes.width / sizes.height;



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)




    //******** **********
    // SCENE, RENDERER, LIGHT
    //******** **********
    // var scene = new THREE.Scene();
    scene.background = new THREE.Color(0.25, 0.25, 0.25);
    let gride = new THREE.GridHelper(200,200);
    gride.position.set(0,-25,0);
    scene.add(gride);
    let plane = new THREE.Mesh( new THREE.BoxGeometry(400,.1,400), new THREE.MeshBasicMaterial({color: 0xe6cd55}) );
    plane.position.set(0,-55,0);
    scene.add(plane);
    // var renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    // var canvas = document.querySelector('canvas.webgl')
    // canvas.appendChild(renderer.domElement);
    var light = new THREE.PointLight();
    light.position.set(0, 3, 6);
    scene.add(light);

    //******** **********
    // CAMERA
    //******** **********
    var width = 4.0,
    height = 4.0;
    var camera = new THREE.OrthographicCamera(
            -width * aspectRatio,
            width  * aspectRatio, //responsive
            height  * aspectRatio,
            -height  * aspectRatio,
            -29, //.001
            400);
    camera.position.set(3,2,3); //3,2,3
    // camera.lookAt(-5, -5, -5);
    camera.lookAt(0, 0, 0);

    //******** **********
    // MESH Setup
    //******** **********
    CubeStack(scene, camera);

    //******** **********
    // lOOP
    //******** **********
    var frame = 0,
    maxFrame = 300;

    let time = Date.now();
    let curTime = time;

    let cursor = { x: 0, y: 0 };

    window.addEventListener('mousemove', (event) =>
    {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = - (event.clientY / sizes.height - 0.5);
       // console.log(cursor.x + " " + cursor.y);

    })

    var loop = function () {


        if (cursor.y > .48){camera.position.y += cursor.y/10} //cam up
        if (cursor.y < 0){camera.position.y += cursor.y/10} //down
        if (cursor.x > .47 ){camera.position.x += cursor.x/10} //right
        if (cursor.x < -.47){camera.position.x += cursor.x/10} //left
        
        
        curTime = Date.now();
        let deltaTime = curTime - time; //deltatime is gonna be like 7 miliseconds
        time = curTime;

        var per = frame / maxFrame;
        requestAnimationFrame(loop);
        camera.updateProjectionMatrix();
        // render, step
        renderer.render(scene, camera);
        frame += 1;
        frame = frame % maxFrame;
    };
    loop();


//end




        //squiggly screen part mostly if in loop
        // SETTING LEFT, RIGHT, TOP, AND BOTTOM PROPS
        // var b = 1 - Math.abs(0.5 - per) / 0.5;
        // width = 4 + 4 * b;
        // height = 4 - 2 * b;
        // camera.left = width * -1;
        // camera.right = width;
        // camera.top = height;
        // camera.bottom = height * -1;


        //MOVES SOMETHING BACK AND FORTH if in loop
        // mesh.rotation.x += Math.sin(.001 * deltaTime);
        // mesh.rotation.z += Math.sin(.001 * deltaTime);
        // if( mesh.position.x == 3 && mesh.position.y == -3){ 
        //     gsap.to(mesh.position, { duration: 3, delay: 1 , x: 0, y: -0 });
        // }
        // if( mesh.position.x == 0 && mesh.position.y == 0){ 
        //     gsap.to(mesh.position, { duration: 3, delay: 1 , x: 3, y: -3 });
        // }