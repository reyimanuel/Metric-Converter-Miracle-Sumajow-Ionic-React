import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList } from '@ionic/react';

const LengthConverter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('mm');
  const [toUnit, setToUnit] = useState<string>('m');
  const [result, setResult] = useState<string>(''); 

  // Fungsi konversi panjang ke meter
  const toMeter = (val: number, unit: string): number => {
    switch (unit) {
      case 'mm': return val / 1000;  // Milimeter ke Meter
      case 'cm': return val / 100;   // Centimeter ke Meter
      case 'dm': return val / 10;    // Decimeter ke Meter
      case 'dam': return val * 10;   // Dekameter ke Meter
      case 'hm': return val * 100;   // Hektometer ke Meter
      case 'km': return val * 1000;  // Kilometer ke Meter
      default: return val;           // Jika Meter
    }
  };

  // Fungsi konversi dari meter ke unit tujuan
  const fromMeter = (val: number, unit: string): number => {
    switch (unit) {
      case 'mm': return val * 1000;  // Meter ke Milimeter
      case 'cm': return val * 100;   // Meter ke Centimeter
      case 'dm': return val * 10;    // Meter ke Decimeter
      case 'dam': return val / 10;   // Meter ke Dekameter
      case 'hm': return val / 100;   // Meter ke Hektometer
      case 'km': return val / 1000;  // Meter ke Kilometer
      default: return val;           // Jika Meter
    }
  };

  // Fungsi konversi panjang
  const convertLength = () => {
    const inMeter = toMeter(value, fromUnit);  // Konversi ke meter
    const convertedValue = fromMeter(inMeter, toUnit);  // Konversi dari meter ke unit tujuan
    setResult(`${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <>
      <IonList>
        {/* Input Nilai */}
        <IonItem>
          <IonLabel position="stacked">Input Length</IonLabel>
          <IonInput
            type="number"
            value={value}
            placeholder="Enter length value"
            onIonChange={(e) => setValue(parseFloat(e.detail.value!))}
          />
        </IonItem>

        {/* Pilihan Unit Asal */}
        <IonItem>
          <IonLabel position="stacked">From</IonLabel>
          <IonSelect value={fromUnit} onIonChange={(e) => setFromUnit(e.detail.value)}>
            <IonSelectOption value="mm">Milimeter (mm)</IonSelectOption>
            <IonSelectOption value="cm">Centimeter (cm)</IonSelectOption>
            <IonSelectOption value="dm">Decimeter (dm)</IonSelectOption>
            <IonSelectOption value="m">Meter (m)</IonSelectOption>
            <IonSelectOption value="dam">Dekameter (dam)</IonSelectOption>
            <IonSelectOption value="hm">Hektometer (hm)</IonSelectOption>
            <IonSelectOption value="km">Kilometer (km)</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Pilihan Unit Tujuan */}
        <IonItem>
          <IonLabel position="stacked">To</IonLabel>
          <IonSelect value={toUnit} onIonChange={(e) => setToUnit(e.detail.value)}>
            <IonSelectOption value="mm">Milimeter (mm)</IonSelectOption>
            <IonSelectOption value="cm">Centimeter (cm)</IonSelectOption>
            <IonSelectOption value="dm">Decimeter (dm)</IonSelectOption>
            <IonSelectOption value="m">Meter (m)</IonSelectOption>
            <IonSelectOption value="dam">Dekameter (dam)</IonSelectOption>
            <IonSelectOption value="hm">Hektometer (hm)</IonSelectOption>
            <IonSelectOption value="km">Kilometer (km)</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Tombol Konversi */}
        <IonButton expand="block" onClick={convertLength}>Convert</IonButton>

        {/* Hasil Konversi */}
        {result && (
          <IonItem>
            <IonLabel>Result</IonLabel>
            <IonLabel>{result}</IonLabel>
          </IonItem>
        )}
      </IonList>
    </>
  );
};

export default LengthConverter;
