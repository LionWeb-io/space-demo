import {
  ClosedShape,
  DiagramConfig,
  LineShape,
  LineStyle,
  Side,
  Type,
} from '@metadev/daga-angular';

export const DAGA_DIAGRAM_CONFIG: DiagramConfig = {
  type: 'simple-diagram',
  canvas: {
    grid: {
      spacing: 50,
      snap: true,
    },
  },
  inferConnectionType: true,
  defaultConnection: 'diagram-connection',
  components: {
    buttons: {},
    palette: {
      sections: [
        {
          name: '',
          templates: [
            {
              templateType: 'node',
              type: 'diagram-node',
              label: 'Node',
            },
          ],
        },
      ],
    },
    propertyEditor: {},
  },
  nodeTypes: [
    {
      id: 'diagram-node',
      name: 'Node',
      defaultWidth: 150,
      defaultHeight: 50,
      label: {
        fontSize: 20,
        margin: 10,
        fit: true,
      },
      ports: [
        {
          coords: [75, 0],
          direction: Side.Top,
        },
        {
          coords: [0, 25],
          direction: Side.Left,
        },
        {
          coords: [75, 50],
          direction: Side.Bottom,
        },
        {
          coords: [150, 25],
          direction: Side.Right,
        },
      ],
      look: {
        lookType: 'shaped-look',
        shape: ClosedShape.Rectangle,
        fillColor: '#FFFFFF',
        borderColor: '#000000',
        borderThickness: 1,
        selected: {
          fillColor: '#FFAAFF',
          borderColor: '#AA00AA',
        },
        highlighted: {
          borderThickness: 3,
        },
      },
      properties: [
        {
          name: 'node name',
          type: Type.Text,
          basic: true,
          editable: true,
          rootAttribute: 'name',
        },
        {
          name: 'node number',
          type: Type.Number,
          defaultValue: 42,
          basic: true,
          editable: true,
        },
        {
          name: 'important',
          type: Type.Boolean,
          defaultValue: true,
          basic: true,
          editable: true,
        },
      ],
    },
  ],
  connectionTypes: [
    {
      id: 'diagram-connection',
      name: 'Connection',
      look: {
        lookType: 'connection-look',
        color: '#000000',
        thickness: 3,
        style: LineStyle.Solid,
        shape: LineShape.Square,
        selected: {
          color: '#AA00AA',
        },
        highlighted: {
          thickness: 5,
        },
      },
      endMarkerLook: {
        lookType: 'marker-image-look',
        image: '/assets/marker/arrow.svg',
        width: 4,
        height: 8,
        refX: 4,
        refY: 4,
      },
      label: {
        color: '#FFFFFF',
        selectedColor: '#FFFFFF',
        fontSize: 12,
        padding: 6,
        margin: 20,
      },
      startTypes: ['diagram-node'],
      endTypes: ['diagram-node'],
      properties: [
        {
          name: 'connection name',
          type: Type.Text,
          defaultValue: 'miss connection',
          basic: true,
          editable: true,
        },
      ],
    },
  ],
  properties: [
    {
      name: 'name',
      type: Type.Text,
      defaultValue: 'unnamed',
      basic: true,
      editable: true,
      rootAttribute: 'name',
    },
    {
      name: 'description',
      type: Type.TextArea,
      basic: true,
      editable: true,
      rootAttribute: 'description',
    },
    {
      name: 'created',
      type: Type.Datetime,
      basic: true,
      editable: false,
      rootAttribute: 'createdAt',
    },
    {
      name: 'last opened',
      type: Type.Datetime,
      basic: true,
      editable: false,
      rootAttribute: 'updatedAt',
    },
    {
      name: 'layout',
      type: Type.Option,
      defaultValue: 'adjacency',
      basic: true,
      editable: true,
      rootAttribute: 'layoutFormat',
      options: [
        { key: 'adjacency', label: 'Adjacency' },
        { key: 'breadth', label: 'Breadth First' },
        { key: 'priority', label: 'Priority' },
      ],
    },
  ],
};
