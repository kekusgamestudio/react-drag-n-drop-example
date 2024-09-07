import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const User = ({ user }) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: user.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div style={ style }
         ref={ setNodeRef }
         { ...attributes }
         { ...listeners }
         className='bg-white p4 rounded-md shadow-md text-black my-2'>
     { user.name }
    </div>
  )
}
