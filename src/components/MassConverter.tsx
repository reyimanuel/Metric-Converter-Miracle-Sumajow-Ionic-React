import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList } from '@ionic/react';

const MassConverter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('mg');
  const [toUnit, setToUnit] = useState<string>('g');
  const [result, setResult] = useState<string>('');

  // Fungsi konversi massa ke gram
  const toGram = (val: number, unit: string): number => {
    switch (unit) {
      case 'mg': return val / 1000;  // Miligram ke Gram
      case 'cg': return val / 100;   // Centigram ke Gram
      case 'dg': return val / 10;    // Desigram ke Gram
      case 'dag': return val * 10;   // Dekagram ke Gram
      case 'hg': return val * 100;   // Hektogram ke Gram
      case 'kg': return val * 1000;  // Kilogram ke Gram
      default: return val;           // Jika Gram
    }
  };

  // Fungsi konversi dari gram ke unit tujuan
  const fromGram = (val: number, unit: string): number => {
    switch (unit) {
      case 'mg': return val * 1000;  // Gram ke Miligram
      case 'cg': return val * 100;   // Gram ke Centigram
      case 'dg': return val * 10;    // Gram ke Desigram
      case 'dag': return val / 10;   // Gram ke Dekagram
      case 'hg': return val / 100;   // Gram ke Hektogram
      case 'kg': return val / 1000;  // Gram ke Kilogram
      default: return val;           // Jika Gram
    }
  };

  // Fungsi konversi massa
  const convertMass = () => {
    const inGram = toGram(value, fromUnit);  // Konversi ke gram
    const convertedValue = fromGram(inGram, toUnit);  // Konversi dari gram ke unit tujuan
    setResult(`${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <>
      <IonList>
        {/* Input Nilai */}
        <IonItem>
          <IonLabel position="stacked">Input Mass</IonLabel>
          <IonInput
            type="number"
            value={value}
            placeholder="Enter mass value"
            onIonChange={(e) => setValue(parseFloat(e.detail.value!))}
          />
        </IonItem>

        {/* Pilihan Unit Asal */}
        <IonItem>
          <IonLabel position="stacked">From</IonLabel>
          <IonSelect value={fromUnit} onIonChange={(e) => setFromUnit(e.detail.value)}>
            <IonSelectOption value="mg">Miligram (mg)</IonSelectOption>
            <IonSelectOption value="cg">Centigram (cg)</IonSelectOption>
            <IonSelectOption value="dg">Desigram (dg)</IonSelectOption>
            <IonSelectOption value="g">Gram (g)</IonSelectOption>
            <IonSelectOption value="dag">Dekagram (dag)</IonSelectOption>
            <IonSelectOption value="hg">Hektogram (hg)</IonSelectOption>
            <IonSelectOption value="kg">Kilogram (kg)</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Pilihan Unit Tujuan */}
        <IonItem>
          <IonLabel position="stacked">To</IonLabel>
          <IonSelect value={toUnit} onIonChange={(e) => setToUnit(e.detail.value)}>
            <IonSelectOption value="mg">Miligram (mg)</IonSelectOption>
            <IonSelectOption value="cg">Centigram (cg)</IonSelectOption>
            <IonSelectOption value="dg">Desigram (dg)</IonSelectOption>
            <IonSelectOption value="g">Gram (g)</IonSelectOption>
            <IonSelectOption value="dag">Dekagram (dag)</IonSelectOption>
            <IonSelectOption value="hg">Hektogram (hg)</IonSelectOption>
            <IonSelectOption value="kg">Kilogram (kg)</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Tombol Konversi */}
        <IonButton expand="block" onClick={convertMass}>
          Convert
        </IonButton>

        {/* Hasil Konversi */}
        {result && (
          <IonItem>
            <IonLabel>{result}</IonLabel>
          </IonItem>
        )}
      </IonList>
    </>
  );
};

export default MassConverter;