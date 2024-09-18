import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MassConverter from '../components/MassConverter';

const Mass : React.FC = () => {
  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>
          <IonTitle>Mass Converter</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        <MassConverter />
      </IonContent>
    </IonPage>
  );
};

export default Mass;
