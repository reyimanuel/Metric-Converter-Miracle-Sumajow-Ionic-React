import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { arrowForwardCircleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="landing-header-title">Metric Converter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      <nav className="navbar">
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <a href="#temperature">Temperature Converter</a>
                <a href="#length">Length Converter</a>
                <a href="#time">Time Converter</a>
                <a href="#current">Electric Current Converter</a>
                <a href="#mass">Mass Converter</a>
                <a href="#intensity">Luminous Intensity Converter</a>
                <a href="#substance">Amount of Substance Converter</a>
              </IonCol>
            </IonRow>
          </IonGrid>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <IonGrid>
            <IonRow className="hero-content">
              <IonCol size="12" sizeMd="6" className="hero-text">
                <h1>Selamat dataing di Metric Converter</h1>
                <IonText>
                  <p>Mengkonversi Besaran Sesuai Dengan Ketentuan Anda.</p>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <p>© 2024 Mass Converter. All rights reserved.</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
