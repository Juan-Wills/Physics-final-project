function conversion_magnitudes(tipo_mag, mag_value1, mag_value2, mag){
    switch(tipo_mag){
        case "d":
        case "m":
            // Formula de conversion
            if(mag_value1==mag_value2){
                resultado= mag;
            }else{
                exponente=Math.abs(mag_value1-mag_value2);
                if(mag_value1>4){
                    resultado= mag*Math.pow(10,exponente);
                }else{
                    resultado= mag/Math.pow(10,exponente);
                }
            }
            // Asignacion de magnitud especifica
            if(tipo_mag=="m"){
                switch (mag_value2){
                case 1:
                    mag_especifica= "Miligramos"
                    break;
                case 2:
                    mag_especifica= "Centigramos"
                    break;
                case 3:
                    mag_especifica= "Decigramos"
                    break;
                case 4:
                    mag_especifica= "Gramos"
                    break;
                case 5:
                    mag_especifica= "Decagramos"
                    break;
                case 6:
                    mag_especifica= "Hectogramos"
                    break;
                case 7:
                    mag_especifica= "Kilogramos"
                    break;
                }
            }else{
                switch (mag_value2){
                case 1:
                    mag_especifica= "Milimetros"
                    break;
                case 2:
                    mag_especifica= "Centimetros"
                    break;
                case 3:
                    mag_especifica= "Decimetros"
                    break;
                case 4:
                    mag_especifica= "Metros"
                    break;
                case 5:
                    mag_especifica= "Decametros"
                    break;
                case 6:
                    mag_especifica= "Hectometros"
                    break;
                case 7:
                    mag_especifica= "Kilometros"
                    break;
                }
            }

            if(resultado==1){
                mag_especifica=mag_especifica.replace("s", " ");
            }

            console.log(resultado,mag_especifica);

            break;
        case "v":
            break;
        case "t":
            break;
        case "a":
            break;
        default:
            console.log("Ninguna opcion fue seleccionada. Por favor, seleccione una opcion valida");
    }
}



conversion_magnitudes("d", 7, 7, 20.16);

// FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA