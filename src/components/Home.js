import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";

function Home(props) {
  let { path, url } = useRouteMatch();

  return (
    <div className="page home">
      <h1 className="page__title">{props.description}</h1>
      <div className="page__content">
        <div className="sections">
          <ul className="sections__menu">
            <li className="sections__menu-item">
              <NavLink className="sections__menu-link" to={`${url}/section1`}>
                Section 1
              </NavLink>
            </li>
            <li className="sections__menu-item">
              <NavLink className="sections__menu-link" to={`${url}/section2`}>
                Section 2
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${path}/section1`}>
              <Section1 images={props.imageGallery} />
            </Route>
            <Route exact path={`${path}/section2`}>
              <Section2
                title={props.titleServices}
                graphText={props.graphText}
                stats={props.stats}
                formText={props.formText}
                formLabels={props.formLabels}
                buttonText={props.buttonText}
              />
            </Route>
            <Redirect to={`${path}/section1`} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;
