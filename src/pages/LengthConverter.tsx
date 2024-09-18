import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LengthConverter from '../components/LengthConverter';

const Length : React.FC = () => {
  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>
          <IonTitle>Length Converter</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        <LengthConverter />
      </IonContent>
    </IonPage>
  );
};

export default Length;
