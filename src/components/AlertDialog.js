import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useTranslations } from 'next-intl'

function SubmitDialog ({ open, onSubmit, onClose }) {
  const t = useTranslations()

  return (
    <Dialog open={open} onOpenChange={e => !e && onClose()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{t('dialog.error')}</DialogTitle>
          <DialogDescription>{t('dialog.error_load')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type='button' onClick={onClose}>{t('dialog.close')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SubmitDialog
