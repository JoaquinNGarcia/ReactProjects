import React from 'react';

// import {

// } from 'prop-types';
import {
    DeviceContainer,
    Label
} from './styled';
import {
    browserName,
    BrowserView,
    CustomView,
    MobileView,
    //isBrowser,
    isMobileOnly,
    //isMobile, //Devuelve si es celular y si es tablet
    isTablet,
    isIE,
    isBrowser,
    isSmartTV,
    isConsole,
    isAndroid,
    isWinPhone,
    isIOS,
    isChrome,
    isFirefox,
    isSafari,
    isOpera,
    isEdge,
    isYandex,
    isChromium,
    isMobileSafari,
    osVersion,
    osName,
    browserVersion,
    mobileVendor,
    mobileModel,
    deviceType,
    isIOS13,
    //deviceDetect,
    engineVersion
} from "react-device-detect";


const Device = () => {
    
    const specificBrowser = () => {
        switch (browserName) {
            case "Chrome":
                return <div> Es Chrome. </div>
            case "Opera":
                return <div> Es Opera. </div>
            case "Firefox":
                return <div> Es Firefox. </div>
            case "Safari":
                return <div> Es Safari. </div>
            case "Internet de Samsung": //No lo puedo reconocer
                return <div> Es Internet de Samsung. </div>
            default: 
                return <div> No se reconocio su navegador. </div> 
            }
    }


    const internetExplorer = () => {
        return isIE ? <div> Internet Explorer no es soportado, Descanga: Chrome/Opera/Firefox </div> : <div> Navegador compatible (No es internet Explorer).</div>
    }

    const typeOfDevice = () => {
        //Tipo de dispositivo
        return isMobileOnly
            ? <div> Es un celular </div> 
            : isTablet
                ? <div> Es una tablet </div>
                : isBrowser
                    ? <div> Es un computadora </div>
                    : isSmartTV
                        ? <div> Es un smartTV </div>
                        : isConsole
                            ? <div> Es un consola </div>
                            : <div> No se reconocio el dispositivo </div>;
    }

    const typeOfSO = () => {
        //Tipo de sistema operativo

        //Tipo de version del sistema operativo
        //osVersion; //Tipo string.

        return isAndroid
            ? <div> Su sistema operativo es android </div>
            : isWinPhone
                ? <div> Su sistema operativo es windows phone </div>
                : isIOS
                    ? <div> Su sistema operativo es IOs </div>
                    : <div> No se reconocio su sistema operativo (Posiblemente porque este desde una computadora) </div>
    }

    const typeofBrowser = () => {
        //Tipo de Navegador
        return isChrome
            ? <div> Su navegador es Chrome </div>
            : isFirefox
                ? <div> Su navegador es Firefox </div>
                : isSafari
                    ? <div> Su navegador es Safari </div>
                    : isOpera
                        ? <div> Su navegador es Opera </div>
                        : isIE
                            ? <div> Su navegador es Internet Explorer </div>
                            : isEdge
                                ? <div> Su navegador es Microsoft Edge </div>
                                : isYandex
                                    ? <div> Su navegador es Yandex </div>
                                    : isChromium
                                        ? <div> Su navegador es Chromium </div>
                                        : isMobileSafari
                                            ? <div> Su navegador es Safari para celulares </div>
                                            : <div> No se reconocio su navegador </div>
    }
    /*
        //Nombre de la version del SO
        osVersion; //Tipo string
        //Nombre sistema operativo
        osName; //Tipo string
        //Version de navegador
        browserVersion; //Tipo string
        //Marca del celular
        mobileVendor; //Tipo string
        //Modelo del celular
        mobileModel; //Tipo string
        //Tipo de dispositivo
        deviceType; //Tipo string
        //Corre ios13
        isIOS13; //boolean
    }
*/

    return (
        <DeviceContainer>
            <Label> Dispositivo: </Label>
                Que estas usando? ->
                <BrowserView>
                     <Label> Estas usando una computadora </Label>
                </BrowserView>
                <MobileView>
                    <Label> Estas usando un celular </Label>
                </MobileView>
                <CustomView>
                </CustomView>
                specificBrowser (Dice cual es el navegador) -> <Label> { specificBrowser } </Label>
                
                internetExplorer (Dice si estas usando internet explorer) -> <Label>{ internetExplorer } </Label>
                
                Tipo de dispositivo -> <Label>{ typeOfDevice }</Label>
                
                Tipo de sistema operativo -> <Label>{ typeOfSO }</Label>
                
                Tipo y version de Navegador -> <Label>{ typeofBrowser }, { browserVersion }</Label>
                
                Nombre y Version del sistema operativo -> <Label>{ osName }, {  osVersion } </Label>

                La marca de su dispositivo -> <Label> { mobileVendor !== 'none' ? mobileVendor : 'n/d' }</Label>

                Modelo de su dispositivo -> <Label> { mobileModel !== 'none' ? mobileModel : 'n/d'} </Label>

                Tipo de dispositivo -> <Label> { deviceType } </Label>
                
                Su dispositivo Apple corre IOs 13 -> <Label> { !!isIOS13 ? 'Si' : 'No' } </Label>

                Version -> <Label> { engineVersion } </Label>
                'ESPECIFICACIONES DE SU DISPOSITIVO: ',
                        `${ isMobileOnly
                            ? '• Tipo: Celular'
                            : isTablet
                                ? '• Tipo: Tablet'
                                : isBrowser
                                    ? '• Tipo: Computadora'
                                    : isSmartTV
                                        ? '• Tipo: SmartTV'
                                        : isConsole
                                            ? '• Tipo: Consola'
                                            : '• Tipo: Desconocido' }`,
                        `• Sistema Operativo: ${ osName } ${ osVersion }`,
                        `• Navegador: ${ browserName } ${ browserVersion }`,
                        `• Marca y modelo: ${ mobileVendor !== 'none' ? mobileVendor : 'n/d' } - ${ mobileModel !== 'none' ? mobileModel : 'n/d' }`
        </DeviceContainer>
    );
};

// Device.propTypes = {

// };

export default Device;
