import styles from "./Diagram.module.scss"
import { ReactDiagram } from 'gojs-react';
import { useSelector } from 'react-redux'
import Links from "../../components/Links/Links";
import AddLink from "../../components/Links/AddLink";
import { initDiagram } from "../../helpers/diagram";


const Diagram = () => {
  const diagram = useSelector((state) => state.diagram)

  return <>
    <ReactDiagram
      initDiagram={initDiagram}
      divClassName={styles.diagramComponent}
      nodeDataArray={diagram.nodeDataArray}
      linkDataArray={diagram.linkDataArray}
    />

    <Links />

    <AddLink />
  </>
}

export default Diagram;