import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function SubmitDialog ({ open, onSubmit, onClose }) {
  const [name, setName] = useState('')

  return (
    <Dialog open={open} onOpenChange={e => !e && onClose()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>提交紀錄</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Input
            id='name'
            value={name}
            placeholder='請輸入您的名稱'
            className='col-span-3'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type='button' onClick={() => onSubmit(name)}>送出</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SubmitDialog