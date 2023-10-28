import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import { useCallback, useState } from 'react'

function SubmitDialog ({ open, onSubmit, onClose }) {
  const t = useTranslations()
  const [name, setName] = useState('')
  const handleSubmit = useCallback(async () => {
    if (!name) return
    await onSubmit(name)
  }, [name, onSubmit])

  return (
    <Dialog open={open} onOpenChange={e => !e && onClose()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{t('dialog.submit_record')}</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Input
            id='name'
            value={name}
            placeholder={t('dialog.placeholder')}
            className='col-span-3'
            onChange={e => setName(e.target.value)}
            maxLength={10}
          />
        </div>
        <DialogFooter>
          <Button type='button' onClick={handleSubmit}>{t('dialog.submit')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SubmitDialog
