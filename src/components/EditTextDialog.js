import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'
import { useCallback, useState } from 'react'

function EditTextDialog ({ open, onSubmit, onClose }) {
  const t = useTranslations()
  const [text, setText] = useState('')
  const handleSubmit = useCallback(async () => {
    if (!text) return
    await onSubmit(text)
    setText('')
  }, [text, onSubmit])

  return (
    <Dialog open={open} onOpenChange={e => !e && onClose()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{t('dialog.set_text')}</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Textarea
            id='message'
            value={text}
            placeholder={t('dialog.type_message')}
            className='col-span-3'
            onChange={e => setText(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type='button' onClick={handleSubmit}>{t('dialog.submit')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditTextDialog
