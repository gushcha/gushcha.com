import { Metadata } from 'next'

import { withLocalizationPage } from '@/components/shared/withLocalization/withLocalizationPage'
import { withLocalizationMetadata } from '@/components/shared/withLocalization/withLocalizationMetadata'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getT } from '@/hooks/useT/getT'
import Block from '@/components/shared/block/Block'
import Contact from '@/components/shared/contact/Contact'
import Image from '@/components/shared/image/Image'
import Heading from '@/components/shared/heading/Heading'
import { ContactType } from '@/components/shared/contact/ContactIcon'

export const generateMetadata = withLocalizationMetadata(async ()=>{
  const t = await getT('denis-cv', ['en', 'ru'])
  return {
    title: t('metadata_title'),
    description: t('metadata_description'),
  }
})

const CvPage: PageWithLocale = async () => {
  const t = await getT('denis-cv', ['en', 'ru'])
  const currentYear = new Date().getFullYear()
  const inItTemplateValues = {
    years_from_2012: currentYear - 2012,
    years_from_2016: currentYear - 2016,
  }

  return (
    <main>
      <Block >
        <section>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className='flex-1'>
              <Heading level={1} className="sm:max-w-[150px]">{t('denis_gushcha')}</Heading>
              <Heading level={4}>
                {t('senior_frontend_developer')},
                <br />
                {t('team_leader')}
              </Heading>
            </div>
            <div className='sm:mx-0 -mx-6'>
              <Image
                src="/assets/denis/img/ava_denis.jpeg"
                alt="Denis Gushcha"
                className="sm:w-[200px] sm:h-[200px]"
              />
            </div>
          </div>
          <br/>
          <p>{t('nine_years_of_total', inItTemplateValues)}</p>
        </section>
      </Block>
      <Block isContrast>
        <section>
          <Heading level={2}>{t('contacts')}</Heading>
          <p>
            <Contact type={ContactType.Gmail} value="mailto:denis.gushcha@gmail.com">
              denis@gushcha.com
            </Contact>
          </p>
          <p>
            <Contact type={ContactType.Telegram} value="https://t.me/ootconose">
              {t('telegram')}
            </Contact>
          </p>
          <p>
            <Contact type={ContactType.Github} value="https://t.me/ootconose">
              {t('github')}
            </Contact>
            <Contact type={ContactType.LinkedIn} value="https://www.linkedin.com/in/denis-gushcha-442469295/">
              {t('linkedin')}
            </Contact>
            <Contact type={ContactType.Website} value="https://denis.gushcha.com">
              {t('denis_gushcha_com')}
            </Contact>
          </p>
        </section>
      </Block>
      <Block>
        <section>
          <Heading level={2}>{t('technology')}</Heading>
          <p>
            <strong>{t('ts_react_vue')}</strong> {t('possible_python')}</p>
        </section>
      </Block>

      <section>
        <Block isContrast>
          <Heading level={2}>{t('work_experience')}</Heading>
          <div>
            <Heading level={3}>{t('team_leader')}</Heading>
            <p>
              <strong>{t('nda_protected_cyprus_sept')}</strong>
            </p>
            <p>
              <strong>{t('product')}</strong>{t('payment_system_for_betting')}</p>
            <strong>{t('responsibilities')}</strong>
            <ul className="list-disc list-inside">
              <li>{t('translating_business_requests_into')}</li>
              <li>{t('fostering_effective_teamwork')}</li>
              <li>{t('building_productive_cooperation_with')}</li>
              <li>{t('coding_nuxt_js_reviewing')}</li>
            </ul>
            <strong>{t('key_achievements')}</strong>
            <ul className="list-disc list-inside">
              <li>{t('fully_re_engineered_deposit')}</li>
              <li>{t('developed_an_admin_panel')}</li>
              <li>{t('formed_two_self_sufficient')}</li>
            </ul>
          </div>
        </Block>
        <Block>
          <div>
            <Heading level={3}>{t('senior_frontend_developer')}</Heading>
            <p>
              <strong>{t('headhunter_group_plc_mar')}</strong>
            </p>
            <p>
              <strong>{t('product')}</strong>
              {t('ats_system')} <a className="underline" href="https://talantix.ru/" target='_blank'>{t('talantix')}</a>{' '}
              {t('built_within_largest_russian')} <a className="underline" href='https://hh.ru/' target='_blank'>{t('hh_ru')}</a>
            </p>
            <strong>{t('responsibilities')}</strong>
            <ul className="list-disc list-inside">
              <li>{t('ats_system_frontend_development')}</li>
              <li>{t('technical_application_design')}</li>
              <li>{t('code_review')}</li>
              <li>{t('growth_hacking')}</li>
              <li>{t('mentoring_talents_development')}</li>
              <li>{t('team_process_improvement_team')}</li>
            </ul>
          </div>
        </Block>
        <Block isContrast>
          <div>
            <Heading level={3}>{t('lead_frontend_developer')}</Heading>
            <p>
              <strong>{t('inex_ltd_nov_2016')}</strong>
            </p>
            <p>
              <strong>{t('product')}</strong>{t('official_russian_railway_portal')}{' '}
              <a className="underline" href='https://www.rzd.ru' target='_blank'>{t('rzd_ru')}</a>
            </p>
            <strong>{t('responsibilities')}</strong>
            <ul className="list-disc list-inside">
              <li>{t('website_frontend_development_vue')}</li>
              <li>{t('lead_of_frontend_department')}</li>
              <li>{t('candidates_interviewing_hiring')}</li>
              <li>{t('mentoring')}</li>
            </ul>
          </div>
        </Block>
        <Block>
          <div>
            <Heading level={3}>{t('software_integration_specialist')}</Heading>
            <p>
              <strong>{t('computel_system_management_ltd')}</strong>
            </p>
            <p>
              <strong>{t('service')}</strong>{t('corporate_identity_related_software')}</p>
            <p>
              <strong>{t('responsibilities')}</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>{t('integration_of_ibm_identity')}</li>
              <li>{t('technical_support_for_system')}</li>
              <li>{t('technical_documenting_e_g')}</li>
            </ul>
          </div>
        </Block>
      </section>

      <section>
        <Block isContrast>
          <Heading level={2}>{t('startups_and_pet_projects')}</Heading>
          <div>
            <Heading level={3}>{t('upplook')}</Heading>
            <p>
              <strong>{t('product')}</strong>{t('social_network_for_stylists')}</p>
            <ul className="list-disc list-inside">
              <li>{t('developed_frontend_app_backbone')}</li>
              <li>{t('partial_backend_app_development')}</li>
            </ul>
          </div>
        </Block>
        <Block isContrast>
          <div>
            <Heading level={3}>{t('treebo_io')}</Heading>
            <p>
              <strong>{t('product')}</strong>{t('web_platform_for_creating')}</p>
            <ul className="list-disc list-inside">
              <li>{t('created_technical_design_and')}</li>
              <li>{t('developed_prototype_of_frontend')}</li>
              <li>{t('developed_prototype_of_telegram')}</li>
            </ul>
          </div>
        </Block>
        <Block isContrast>
          <div>
            <Heading level={3}>{t('unpacked_club')}</Heading>
            <p>
              <strong>{t('product')}</strong>{t('personal_enthusiastic_project_network')}</p>
            <ul className="list-disc list-inside">
              <li>{t('developed_alpha_version_of')}</li>
            </ul>
          </div>
        </Block>
      </section>

      <section>
        <Block>
          <div>
            <Heading level={2}>{t('education')}</Heading>
            <ul className="list-disc list-inside">
              <li>
                <strong>{t('hse_moscow_institute_of')}</strong>:{' '}{t('sept_2007_jul_2012')}</li>
              <li>
                <strong>{t('department')}</strong>{t('applied_mathematics')}</li>
              <li>
                <strong>{t('obtained_qualification')}</strong>{t('engineer_mathematician_specialist')}</li>
            </ul>
          </div>
        </Block>
        <Block>
          <div>
            <Heading level={2}>{t('languages')}</Heading>
            <ul className="list-disc list-inside">
              <li>
                <strong>{t('russian')}</strong>{t('native_speaker')}</li>
              <li>
                <strong>{t('english')}</strong>{t('advanced_spoken_written')}</li>
              <li>
                <strong>{t('greek')}</strong> A1
              </li>
            </ul>
          </div>
        </Block>
      </section>

      <section>
        <Block isContrast>
          <Heading level={2}>{t('about_me')}</Heading>
          <p>{t('motivated_by_projects_led')}</p>
          <p>{t('i_believe_that_developers')}</p>
        </Block>
      </section>
    </main>
  )
}

export default withLocalizationPage(CvPage)