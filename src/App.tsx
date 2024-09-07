import { closestCenter, DndContext } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import { User } from './User'

function App() {
  const [personas, setPersonas] = useState([
    { id: 'aaa', name: 'Kekus' },
    { id: 'bbb', name: 'Vicum' },
    { id: 'ccc', name: 'Fio' },
    { id: 'ddd', name: 'Tobi' },
  ])

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // console.log('active', active.id);
    // console.log('over', over.id);
    const oldIdex = personas.findIndex( persona => persona.id === active.id );
    const newIdex = personas.findIndex( persona => persona.id === over.id );
    // console.log('oldIdex', oldIdex);
    // console.log('newIdex', newIdex);
    const newOrder = arrayMove(personas, oldIdex, newIdex);
    setPersonas(newOrder);

  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-4/6'>
        <DndContext collisionDetection={ closestCenter }
                    onDragEnd={ handleDragEnd }>
          <div className="text-3xl font-bold">Drag & drop example</div>
          <SortableContext items={ personas } 
                          strategy={ verticalListSortingStrategy }>
            {
              personas.map((user) => (
                <User user={ user } key={ user.id }/>
              ))
            }
          </SortableContext>
        </DndContext>
      </div>
    </div>


  )
}

export default App
