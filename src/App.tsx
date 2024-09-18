import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { albums, remove, thermometer } from "ionicons/icons";
import Temperature from "./pages/TemperatureConverter";
import Mass from "./pages/MassConverter";
import Length from "./pages/LengthConverter";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/temperature">
            <Temperature />
          </Route>
          <Route exact path="/length">
            <Length />
          </Route>
          {/* <Route exact path="/time">
          <TimePage />
        </Route> */}
          {/* <Route exact path="/current">
          <CurrentPage />
        </Route> */}
          <Route exact path="/mass">
            <Mass />
          </Route>
          {/* <Route exact path="/light-intensity">
          <LightIntensityPage />
        </Route> */}
          {/* <Route exact path="/substance">
          <SubstancePage />
        </Route> */}
          {/* <Route exact path="/">
          <Redirect to="/home" />
          <Home />
        </Route> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Temperature" href="/Temperature">
            <IonIcon icon={thermometer} />
            <IonLabel>Temperature</IonLabel>
          </IonTabButton>

          <IonTabButton tab="length" href="/length">
            <IonIcon icon={remove} />
            <IonLabel>length</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Mass" href="/Mass">
            <IonIcon icon={albums} />
            <IonLabel>Mass</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
