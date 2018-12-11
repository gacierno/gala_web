/**
 * NAVECITA
 **/

function NavePlayer(){
    /**
	 * LA NAVE SOLO PUEDE MOVERSE EN EL EJE HORIZONTAL Y SOLO PARA COMPLICAR LA MATEMATICA
	 * EL 0 SERA LA POSICION CENTRAL Y LA QUE SE UBICARRA LA NAVE AL COMIENZO DEL JUEGO 
	 * LAS POSICIONES < 0 SERAN HACIA LA IZQUIERDA 
	 * LAS POSICIONES > 0 SERAN HACIA LA DERECHA
	 **/
	let posicion = 0; //la hago privada porque esta bueno que no se pueda modificar mas que con la funcion moverse

	/* ASI SE VERA LA NAVE Y SE PUEDE ODIFICAR MUY FACILMENTE */
	let SKIN = './assets/images/player.png';


	/**
	 * moverse recibe un parametro numerico el cual modificara directamente al atributo posicion
	 **/
	this.moverse = function( direccion ){
		posicion += direccion;
	}

	/**
	 * getPosicion devuelve el valor de la posicion se puede usar para verificar si se puede mover
	 * en alguna dreccion requerida por el cuadro o la escena
	 **/
	this.getPosicion = function( ){
		return posicion;
	}

	/**
	 * disparar la nave tiene q disparar si no como mata a los extraterrestres
	 **/
	this.disparar = function( ){
		console.log( 'pew');
	}

	/**
	 * dibujarse es el metodo que tiene la nave para existir en el DOM
	 **/
	this.dibujarse = function( ){
		return '<div style="background: no-repeat url('+SKIN+'); background-size: contain; height: 30px; width: 30px;"></div>';
	}


}