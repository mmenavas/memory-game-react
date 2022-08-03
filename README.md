## Memory Game Builder React Component
This React component uses the @mmenavas/memory-game-builder as the
engine for building a flip-a-tile game.

### Installation
Install this library using NPM by running
```
npm install @mmenavas/memory-game-react
```

Once the library is installed you can create a flip-a-tile game by
following the code sample below:

```
import React, { useState } from 'react';
import { MemoryGameBoard } from '@mmenavas/memory-game-react'

export default function App() {

  return (
    <MemoryGameBoard values={['A', 'B', 'C']} // The values for the tiles.
      timeoutDuration={ 500 } // How lomg should tiles stay revealed when a mismatch occurs.
      TileNode={(props) => <div>{ props.value }</div>} // The component used to render the tile.
      ConcealedTileNode={() => <div>?</div>} // The component used to render a concealed tile.
    />
  )

}
```

### Roadmap
I plan to add react components for any new games added to
https://github.com/mmenavas/memory-game-builder.