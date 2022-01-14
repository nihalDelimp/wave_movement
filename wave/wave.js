var filter, compressor, mediaStreamSource;
navigator.mediaDevices.getUserMedia( { audio: true }, initAudio ).then( function ( stream ) {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource( stream );
    javascriptNode = audioContext.createScriptProcessor( 2048, 1, 1 );

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect( analyser );
    analyser.connect( javascriptNode );
    javascriptNode.connect( audioContext.destination );
    javascriptNode.onaudioprocess = function () {
        var array = new Uint8Array( analyser.frequencyBinCount );
        analyser.getByteFrequencyData( array );
        var values = 0;

        var length = array.length;
        for ( var i = 0; i < length; i++ ) {
            values += ( array[i] );
        }

        var average = values / length;
        annyang.start();

        render( average )
    }
} ).catch( err => {
    const average = 0.1;
    render( average )
}
)

function initAudio ( stream ) {
    compressor = audioContext.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.reduction.value = -20;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;

    filter = audioContext.createBiquadFilter();
    filter.Q.value = 8.30;
    filter.type = filter.LOWPASS;
    filter.frequency.value = 255;
    filter.gain.value = 3.0;
    // filter.type = 'bandpass';
    filter.connect( compressor );


    compressor.connect( context.destination )
    filter.connect( context.destination )

    mediaStreamSource = context.createMediaStreamSource( stream );
    mediaStreamSource.connect( filter );
}


var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

var container;
var camera, scene, renderer;
//var renderer = new THREE.WebGLRenderer();

if ( window.WebGLRenderingContext ) {
    renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
}
else {
    renderer = new THREE.CanvasRenderer();
}


var particles, particle, count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init () {

    container = document.createElement( 'div' );
    document.body.appendChild( container );
    if ( container ) {
        container.className += container.className ? ' waves' : 'waves';
    }

    camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
    camera.position.z = 300; //This is how close or far the particles are seen

    camera.rotation.x = 0.35;

    scene = new THREE.Scene();

    particles = new Array();

    var PI2 = Math.PI * 2;


    const material = new THREE.SpriteMaterial( {
        color: "#fceb59", //changes color of particles
        program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 0.1, 0, PI2, true );
            context.fill();

        }
    } );

    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix++ ) {

        for ( var iy = 0; iy < AMOUNTY; iy++ ) {

            particle = particles[i++] = new THREE.Sprite( material );
            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
            scene.add( particle );

        }

    }

    // renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( "black", 1 );
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize () {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate () {

    requestAnimationFrame( animate );

}

function render ( frequency ) {
    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix++ ) {

        for ( var iy = 0; iy < AMOUNTY; iy++ ) {

            particle = particles[i++];
            // particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 20 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
            // particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
            particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 10 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
            particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 1 + ( Math.sin( ( iy + count ) * 0.5 ) + 2 ) * 1;
        }

    }

    renderer.render( scene, camera );
    // This increases 0or decreases speed
    //count += 0.2;
    if ( frequency === 0 ) {
        count += 0;
    }
    else if ( frequency >= 10 && frequency <= 40 ) {
        count += 0.3;
    } else if ( frequency >= 40 && frequency <= 80 ) {
        count += 0.9;
    }
    else {
        count += 0;

    }



}
