import * as THREE from "three"

const CubeStack = (scene, camera) => {   
    //Add and create all the objects 
    // var material = new THREE.MeshNormalMaterial();
    var material = new THREE.MeshPhongMaterial({color: 0xcf6a26 });

   
    
    let martyTexture = new THREE.TextureLoader().load('./marty.png');
    let rockTexture = new THREE.TextureLoader().load('./rock.png');
    let cactusTexture = new THREE.TextureLoader().load('./cactus.png');
    //martyTexture.wrapS = THREE.RepeatWrapping;
    //martyTexture.wrapT = THREE.RepeatWrapping;
    //martyTexture.repeat.set( 4, 4 );

    const smaterial = new THREE.SpriteMaterial( { map: martyTexture, color: 0xffffff } );
    const rockmaterial = new THREE.SpriteMaterial( { map: rockTexture, color: 0xffffff } );
    const cactusmaterial = new THREE.SpriteMaterial( { map: cactusTexture, color: 0xffffff } );
    const sprite = new THREE.Sprite( smaterial );
    sprite.scale.set(1, 1, 1)

        // eval('let sprt' + i + ' = 4;'); //new THREE.Sprite( smaterial );
        // console.log(sprt0);
        // eval('sprt' + i + '.position.set' + '(-'+i+'/2,-'+i+'/2,-'+i+'/2);');
        // scene.add('sprt'+i);

        const genPosition = (maxSize) => {
            return Math.round(Math.random()*maxSize-maxSize/2);
        }


        //marty        
        for( let j = 1; j < 7; j++) {
            window['value'+j] = new THREE.Sprite( smaterial ); 
            window['value'+j].position.set(genPosition(25), .5 ,genPosition(25));
            scene.add(window['value'+j]);
        }

        //rock
        for( let j = 1; j < 14; j++) {
            window['value'+j] = new THREE.Sprite( rockmaterial ); 
            window['value'+j].position.set(genPosition(39), .8 ,genPosition(39));
            scene.add(window['value'+j]);
        }

        //cactus
        for( let j = 1; j < 9; j++) {
            window['value'+j] = new THREE.Sprite( cactusmaterial ); 
            window['value'+j].scale.set(.6,2,.6);
            window['value'+j].position.set(genPosition(39), .9 ,genPosition(39));
            scene.add(window['value'+j]);
        }
      
      
    

    //+  x=btmright y=up z=toprt     -- x=topleft y=down z=bottomleft
    var m1 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), material );
    m1.position.set(1, -1, -3);
    scene.add( m1 );

    var m2 = new THREE.Mesh( new THREE.BoxGeometry(1,2,2), material );
    m2.position.set(3, -1, 0);
    scene.add( m2 );
    
    var m3 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), material );
    m3.position.set(-5, 2, 1);
    scene.add( m3 );

    var m4 = new THREE.Mesh( new THREE.BoxGeometry(2,3,1), material );
    m4.position.set(-1, 0, 0);
    scene.add( m4 );

    var m5 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), material );
    m5.position.set(0, 0, -5);
    scene.add( m5 );

    var m6 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), material );
    m6.position.set(1, 1, -1);
    scene.add( m6 );
};

export default CubeStack;