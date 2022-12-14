
import * as go from 'gojs';

export const initDiagram = () => {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    $(go.Diagram,
      {
        grid: $(go.Panel, "Grid",
          $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
          $(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.5, interval: 10 }),
          $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
          $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
        ),
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          }),
        "draggingTool.dragsLink": true,
        "draggingTool.isGridSnapEnabled": true,
        "linkingTool.isUnconnectedLinkValid": true,
        "linkingTool.portGravity": 20,
        "relinkingTool.isUnconnectedLinkValid": true,
        "relinkingTool.portGravity": 20,
      });

  // define a simple Node template
  diagram.nodeTemplate =
    $(go.Node, 'Auto',  // the Shape will go around the TextBlock
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, 'RoundedRectangle',
        { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
        // Shape.fill is bound to Node.data.color
        new go.Binding('fill', 'color')),
      $(go.TextBlock,
        { margin: 8, editable: true },  // some room around the text
        new go.Binding('text').makeTwoWay()
      ), {
      contextMenu:     // define a context menu for each node
        $("ContextMenu",  // that has one button
          $("ContextMenuButton",
            {
              "ButtonBorder.fill": "white",
              "_buttonFillOver": "skyblue"
            },
            $(go.TextBlock, "Change Size"),
            { click: changeSize })
          // more ContextMenuButtons would go here
        )  // end Adornment
    }
    );

  function changeSize(e, obj) {
    diagram.commit(function (d) {
      var contextmenu = obj.part;
      var nodedata = contextmenu.data;

      const newSize = {}
      
      d.model.set(nodedata, "width", newSize.width);
      d.model.set(nodedata, "height", newSize.height);
    }, "changed color");
  }

  diagram.contextMenu =
    $("ContextMenu",
      $("ContextMenuButton",
        $(go.TextBlock, "Undo"),
        { click: function (e, obj) { e.diagram.commandHandler.undo(); } },
        new go.Binding("visible", "", function (o) {
          return o.diagram.commandHandler.canUndo();
        }).ofObject()),
      $("ContextMenuButton",
        $(go.TextBlock, "Redo"),
        { click: function (e, obj) { e.diagram.commandHandler.redo(); } },
        new go.Binding("visible", "", function (o) {
          return o.diagram.commandHandler.canRedo();
        }).ofObject()),
      // no binding, always visible button:
      
    );

  return diagram;
}