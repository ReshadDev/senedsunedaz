import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { confirmIcon, faqIcon } from '../../assets/icons';
import {
  Button,
  Dialog,
  TextField,
  DialogContent,
  InputLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const Faq: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openConModal, setConModal] = React.useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs
      .send(
        'service_omhqavi',
        'template_idwglb8',
        { ...data },
        '1B2wA2Uq9zT-7EOBR'
      )
      .then(() => {
        setOpenModal(false);
        setConModal(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div id='faq'>
      <section className='faq'>
        <div className='container'>
          <div className='faq-content'>
            <div className='faq-logo'>
              <img src={faqIcon} alt='' />
            </div>
            <div className='faq-heading-text'>
              <h1>Senedsuned.az üçün Tez-tez Verilən Suallar (FAQ) və Cavabları</h1>
            </div>

            <div className='faq-accordion'>
              <div className='accordion'>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1-content'
                    id='panel1-header'
                  >
                    Senedsuned.az saytında hansı ərizə kateqoriyaları mövcuddur?
                  </AccordionSummary>
                  <AccordionDetails>
                  Saytımızda [təhsil, iş, hüquqi və s. kimi] daxil olmaqla altı fərqli ərizə kateqoriyası mövcuddur. Hər bir kateqoriya müxtəlif ərizələr üçün xüsusi hazırlanmışdır.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2-content'
                    id='panel2-header'
                  >
                   Senedsuned.az saytından necə ərizə forması yükləyə bilərəm?
                  </AccordionSummary>
                  <AccordionDetails>
                  Lazım olan formanı seçdikdən sonra 'Yüklə' düyməsini basaraq ərizə formasını cihazınıza yükləyə bilərsiniz. Formanı lazım olduğu kimi redaktə edərək ya da onlayn təqdim edə bilərsiniz.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3-content'
                    id='panel3-header'
                  >
                    Saytda ərizə formlarını birbaşa redaktə edə bilərəmmi?
                  </AccordionSummary>
                  <AccordionDetails>
                  Bəli, saytda formları birbaşa redaktə edə bilərsiniz. Redaktə etmək istədiyiniz formanı seçin, 'Redaktə Et' düyməsini basın və lazımi dəyişiklikləri edin. Daha sonra redaktə edilmiş formanı yükləyə və ya onlayn təqdim edə bilərsiniz.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel4-content'
                    id='panel4-header'
                  >
                   Forma yükləyərkən və ya redaktə edərkən problem yaşasam, nə etməliyəm?
                  </AccordionSummary>
                  <AccordionDetails>
                  İnternet bağlantınızı yoxlayın və yenidən cəhd edin. Problem davam edərsə, 'Bizimlə Əlaqə' səhifəsi vasitəsilə dəstək komandamızla əlaqə saxlayın. Biz sizə dərhal kömək edəcəyik.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel5-content'
                    id='panel5-header'
                  >
                    Senedsuned.az saytında təqdim edilən CV şablonlarını necə istifadə edə bilərəm?
                  </AccordionSummary>
                  <AccordionDetails>
                  'CV Şablonları' bölməsindən bir şablon seçərək öz məlumatlarınızı daxil edərək CV hazırlaya bilərsiniz. Hazırladığınız CV-ni cihazınıza yükləyə və ya birbaşa onlayn redaktə edə bilərsiniz.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className='more-questions-box'>
              <div className='more-questions-content-box'>
                <div className='more-questions-text-box'>
                  <p className='text-1'>Əlavə sualın var?</p>
                  <p className='text-2'>
                    Suallarını bizə yönləndir, tezliklə cavablandırılsın.
                  </p>
                </div>
                <div className='more-questions-button-box'>
                  <button className='faq-button' onClick={handleOpenModal}>
                    Bizimlə əlaqə
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog  open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          <form className='email-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Adınız
              </InputLabel>
              <TextField
                {...register('user_name', { required: 'Adınız' })}
                type='text'
                fullWidth
                placeholder='John Doe'
                error={!!errors.user_name}
                helperText={errors.user_name ? errors.user_name.message : ''}
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Email
              </InputLabel>
              <TextField
                {...register('user_email', { required: 'Emailiniz' })}
                type='email'
                fullWidth
                placeholder='example@mail.com'
                error={!!errors.user_email}
                helperText={errors.user_email ? errors.user_email.message : ''}
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Sualınız
              </InputLabel>
              <TextField
                {...register('message', { required: 'Sualınız' })}
                multiline
                fullWidth
                placeholder='Daxil edin'
                rows={4}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            </div>
            <Button type='submit' variant='contained' id='faq-button'>
              Göndər
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={openConModal} onClose={handleCloseModal}>
        <DialogContent>
          <div className='finish-form-modal'>
            <div className='finish-modal-content'>
              <img src={confirmIcon} alt='' />
              <h1>Sualınızı göndərdiyiniz üçün təşəkkür edirik.</h1>
            </div>
            <Button
              onClick={() => setConModal(false)}
              variant='contained'
              id='faq-button'
            >
              Bitir
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Faq;
