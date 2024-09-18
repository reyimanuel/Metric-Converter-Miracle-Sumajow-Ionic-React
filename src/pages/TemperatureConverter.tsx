import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TemperatureConverter from '../components/TemperatureConverter';

const Temperature : React.FC = () => {
  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>
          <IonTitle>Temperature Converter</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        <TemperatureConverter />
      </IonContent>
    </IonPage>
  );
};

export default Temperature;
