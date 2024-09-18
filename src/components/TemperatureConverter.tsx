import react, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonContent } from '@ionic/react';

const TemperatureConverter: React.FC = () => {
    const [value, setValue] = useState<number | undefined>();
    const [unit, setUnit] = useState<string>('CtoF');
    const [result, setResult] = useState<string>('');

    const convert = () => {
        let convertedValue;
        if (unit === 'CtoF') {  // Celsius To Fahrenheit
            convertedValue = (value ?? 0) * 9 / 5 + 32;
            setResult(`${value} °C = ${convertedValue.toFixed(2)} °F`);
        } else if (unit === 'FtoC') { // Fahrenheit To Celsius
            convertedValue = ((value ?? 0) - 32) * 5 / 9;
            setResult(`${value} °F = ${convertedValue.toFixed(2)} °C`);
        } else if (unit === 'CtoK') { // Celsius To Kelvin
            convertedValue = (value ?? 0) + 273.15;
            setResult(`${value} °C = ${convertedValue.toFixed(2)} °K`);
        } else if (unit === 'KtoC') { // Kelvin To Celsius
            convertedValue = (value ?? 0) - 273.15;
            setResult(`${value} °K = ${convertedValue.toFixed(2)} °C`);
        } else if (unit === 'FtoK') { // Fahrenheit To Kelvin
            convertedValue = ((value ?? 0) - 32) * 5 / 9 + 273.15;
            setResult(`${value} °F = ${convertedValue.toFixed(2)} °K`);
        } else if (unit === 'KtoF') { // Kelvin To Fahrenheit
            convertedValue = ((value ?? 0) - 273.15) * 9 / 5 + 32;
            setResult(`${value} °K = ${convertedValue.toFixed(2)} °F`);
        }
    };

    return (
        <IonContent className="ion-padding">
            <IonItem>
                <IonLabel position='stacked'>Memasukkan Nilai</IonLabel>
                <IonInput type='number' placeholder='Masukkan nilai yang diinginkan' onIonChange={(e) => setValue(parseFloat(e.detail.value!))}/>
            </IonItem>

            <IonItem>
                <IonLabel position='stacked'>Tipe Konversi</IonLabel>
                <IonSelect value={unit} placeholder='Pilih tipe konversi' onIonChange={(e) => setUnit(e.detail.value)}>
                    <IonSelectOption value='CtoF'>Celsius ke Fahrenheit</IonSelectOption>
                    <IonSelectOption value='FtoC'>Fahrenheit ke Celsius</IonSelectOption>
                    <IonSelectOption value='CtoK'>Celsius ke Kelvin</IonSelectOption>
                    <IonSelectOption value='KtoC'>Kelvin ke Celsius</IonSelectOption>
                    <IonSelectOption value='FtoK'>Fahrenheit ke Kelvin</IonSelectOption>
                    <IonSelectOption value='KtoF'>Kelvin ke Fahrenheit</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonButton expand='block' onClick={convert}>Konversi</IonButton>

            {result && (
                <IonItem>
                    <IonLabel>Hasil Konversi</IonLabel>
                    <IonLabel>{result}</IonLabel>
                </IonItem>
            )}
        </IonContent>
    );
};

export default TemperatureConverter;