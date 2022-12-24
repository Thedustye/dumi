import React from 'react';
import { Button } from 'dumi-ui-site-template';

export default function App() {
  return (
    <>
      <div title="基础按钮">
        <Button>Default</Button>
        <Button active>Outline</Button>
        <Button danger>Danger</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary" danger>
          Primary
        </Button>
      </div>

      <div title="块级按钮">
        <Button block>Block default</Button>
        <Button block type="primary">
          Block primary
        </Button>
        <Button block danger dashed>
          Block danger
        </Button>
      </div>
    </>
  );
}
