import { memo } from 'react'
import { BoardList } from '@/components'
function TaskList() {
  return (
    <div>
      <ul>
        <BoardList title="잼잼ahr목" date="내일" userName="너야너" href="#" />
      </ul>
    </div>
  )
}

export default memo(TaskList)
