import { useEffect, useState } from "react";
import React from 'react';
import './word.css';

const RandomWord = () => {
    const palabrasConDefinicion = [
        { palabra: "arbol", definicion: "Planta de tronco leñoso que se ramifica a cierta altura del suelo." },
        { palabra: "casa", definicion: "Edificio para habitar." },
        { palabra: "mariposa", definicion: "Insecto volador con alas grandes y coloridas." },
        { palabra: "ventana", definicion: "Abertura en la pared de un edificio, generalmente cerrada con cristal." },
        { palabra: "camion", definicion: "Vehículo grande para el transporte de mercancías." },
        { palabra: "computadora", definicion: "Máquina electrónica que procesa información de manera automática." },
        { palabra: "telefono", definicion: "Aparato para transmitir sonidos a larga distancia." },
        { palabra: "mesa", definicion: "Mueble con tablero horizontal que se apoya sobre patas." },
        { palabra: "silla", definicion: "Asiento con respaldo, por lo general con cuatro patas." },
        { palabra: "reloj", definicion: "Instrumento para medir el tiempo." },
        { palabra: "gato", definicion: "Mamífero carnívoro doméstico de la familia de los felinos." },
        { palabra: "perro", definicion: "Mamífero carnívoro doméstico de la familia de los cánidos." },
        { palabra: "libro", definicion: "Conjunto de hojas de papel u otro material que forman un volumen encuadernado." },
        { palabra: "escuela", definicion: "Establecimiento donde se imparte enseñanza." },
        { palabra: "avion", definicion: "Aeroplano, vehículo volador más pesado que el aire." },
        { palabra: "tren", definicion: "Vehículo que circula por vías férreas para el transporte de personas o mercancías." },
        { palabra: "bicicleta", definicion: "Vehículo de dos ruedas impulsado por pedales." },
        { palabra: "coche", definicion: "Vehículo de motor destinado al transporte de personas." },
        { palabra: "guitarra", definicion: "Instrumento musical de cuerda, con una caja de resonancia." },
        { palabra: "playa", definicion: "Ribera del mar o de un río, formada de arena o piedras." },
        { palabra: "bosque", definicion: "Gran extensión de terreno poblado de árboles y arbustos." },
        { palabra: "soledad", definicion: "Estado de quien se encuentra solo o sin compañía." },
        { palabra: "luna", definicion: "Satélite natural de la Tierra, visible de noche." },
        { palabra: "estrella", definicion: "Cuerpo celeste que brilla con luz propia en el cielo." },
        { palabra: "planeta", definicion: "Cuerpo celeste que orbita alrededor de una estrella." },
        { palabra: "rio", definicion: "Corriente natural de agua que fluye con continuidad." },
        { palabra: "lago", definicion: "Gran masa de agua, generalmente dulce, rodeada de tierra." },
        { palabra: "oceano", definicion: "Gran masa de agua salada que cubre la mayor parte de la superficie terrestre." },
        { palabra: "desierto", definicion: "Terreno seco, generalmente cubierto de arena, con escasa vegetación." },
        { palabra: "ciudad", definicion: "Área urbana con alta densidad de población y numerosas edificaciones." },
        { palabra: "campo", definicion: "Terreno extenso, fuera de poblaciones, dedicado al cultivo o pastoreo." },
        { palabra: "flor", definicion: "Parte de la planta que contiene los órganos reproductores." },
        { palabra: "nube", definicion: "Masa visible de vapor de agua en suspensión en la atmósfera." },
        { palabra: "lluvia", definicion: "Precipitación de gotas de agua desde las nubes." },
        { palabra: "nieve", definicion: "Precipitación de cristales de hielo desde la atmósfera." },
        { palabra: "viento", definicion: "Corriente de aire que se desplaza en la atmósfera." },
        { palabra: "fuego", definicion: "Proceso de combustión caracterizado por la emisión de calor y luz." },
        { palabra: "tierra", definicion: "Superficie sólida del planeta que no está cubierta por agua." },
        { palabra: "cielo", definicion: "Espacio en el que se mueven los astros y donde parece que se sitúan las nubes." },
        { palabra: "marisco", definicion: "Animales marinos comestibles como moluscos y crustáceos." },
        { palabra: "volcan", definicion: "Abertura en la corteza terrestre por donde salen magma, gases y cenizas." },
        { palabra: "puente", definicion: "Construcción que permite salvar un obstáculo, como un río o una carretera." },
        { palabra: "torre", definicion: "Construcción alta y estrecha, generalmente aislada o adosada a un edificio." },
        { palabra: "castillo", definicion: "Fortaleza construida en la antigüedad para defensa." },
        { palabra: "museo", definicion: "Institución que conserva y expone colecciones de arte, ciencia u otros objetos de valor cultural." },
        { palabra: "teatro", definicion: "Edificio destinado a la representación de obras dramáticas." },
        { palabra: "cine", definicion: "Lugar donde se proyectan películas." },
        { palabra: "jardin", definicion: "Terreno donde se cultivan plantas ornamentales." },
        { palabra: "campo", definicion: "Terreno extenso sin edificar, en especial dedicado al cultivo o pastoreo." }
    ];

    const [estadoPalabra, setEstadoPalabra] = useState('');
    const [palabraCorrecta, setPalabraCorrecta] = useState('');
    const [palabraCorrectaMin, setPalabraCorrectaMin] = useState('');
    const [definicion, setDefinicion] = useState('');
    const [palabraInput, setPalabraInput] = useState('');
    const [correcto, setCorrecto] = useState(0);
    const [intentos, setIntentos] = useState(0);
    const [ganador, setGanador] = useState(false);
    const [listaPalabras, setListaPalabras] = useState([]);
    const [errorInput, setErrorInput] = useState(false);

    const newWord = () => {
        const palabraAleatoria = palabrasConDefinicion[Math.floor(Math.random() * palabrasConDefinicion.length)];
        const palabraDesordenada = palabraAleatoria.palabra.split('').sort(() => Math.random() - 0.5).join('');
        setEstadoPalabra(palabraDesordenada);
        setPalabraCorrecta(palabraAleatoria.palabra);
        setPalabraCorrectaMin(palabraAleatoria.palabra.toLowerCase()); // Guardar palabra correcta en minúsculas
        setDefinicion(palabraAleatoria.definicion);
        setPalabraInput('');
        setIntentos(0);
        setErrorInput(false); // Restablecer errorInput al generar una nueva palabra
    };

    useEffect(() => {
        newWord();
    }, []);

    const palabrasIncorrectas = () => {
        setListaPalabras([...listaPalabras, palabraCorrecta]);
    };

    const handleInputChange = (e) => {
        setPalabraInput(e.target.value);
        setErrorInput(false); // Ocultar el mensaje de error cuando el usuario empieza a escribir
    };

    const resetWord = () => {
        setIntentos(0);
        setPalabraInput('');
        setErrorInput(false); // Restablecer errorInput al resetear la palabra
    };

    const verificarPalabra = () => {
        if (palabraInput.length === 0) {
            setErrorInput(true);
            return;
        }
        setErrorInput(false); // Ocultar el mensaje de error si se ingresó algo

        if (palabraCorrectaMin === palabraInput.toLowerCase()) { // Convertir la entrada a minúsculas para comparación
            setCorrecto(correcto + 1);
            if (correcto + 1 === 10) {
                setGanador(true);
            } else {
                newWord();
            }
        } else {
            setIntentos(intentos + 1);
            if (intentos + 1 >= 3) {
                palabrasIncorrectas();
                newWord();
            }
        }
    };

    const jugarNuevo = () => {
        setCorrecto(0);
        setGanador(false);
        setListaPalabras([]);
        newWord();
    };

    return (
        <div className="container">
            {ganador ? (
                <div>
                    <h1>FELICITACIONES, LOGRASTE LLEGAR A 10 ACIERTOS. ¡ERES TODO UN EXPERTO EN EL JUEGO!</h1>
                    <button onClick={jugarNuevo}>Jugar Otra Vez</button>
                </div>
            ) : (
                <div>
                    <h1 className="title-gradient">Adivina la Palabra</h1>
                    <h2>{estadoPalabra}</h2>
                    <p>{definicion}</p>
                    <input 
                        type="text" 
                        value={palabraInput} 
                        onChange={handleInputChange}
                    />
                    {errorInput && <p className="error-message">Escribe una palabra</p>}
                    <p>Aciertos: {correcto} /10</p>
                    <p>Intentos: {intentos} /3</p>

                    <h4>Palabras Fallidas</h4>
                    <ul>
                        {listaPalabras.map((palabra, index) => (
                            <li key={index}>{palabra}</li>
                        ))}
                    </ul>
                    <button onClick={verificarPalabra}>Aceptar</button>
                    <button onClick={newWord}>Aleatorio</button>
                    <button onClick={resetWord}>Reiniciar</button>
                </div>
            )}
        </div>
    );
};

export default RandomWord;
