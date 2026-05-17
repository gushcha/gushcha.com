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

  return (
    <main>
      <Block>
        <section>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className='flex-1'>
              <Heading level={1} className="sm:max-w-[220px] text-blue-900 dark:text-blue-200">{t('denis_gushcha')}</Heading>
              <Heading level={4}>{t('head_of_engineering')}</Heading>
            </div>
            <div className='sm:mx-0 -mx-6 sm:relative sm:w-[200px]'>
              <Image
                src="/assets/denis/img/ava_denis.jpeg"
                alt="Denis Gushcha"
                className="sm:w-[200px] sm:h-[200px] sm:absolute sm:right-0"
              />
            </div>
          </div>
        </section>
        <br /><br />
        <section>
          <Heading level={2} className='hidden'>{t('contacts')}</Heading>
          <p>
            <Contact type={ContactType.Gmail} value="mailto:denis@gushcha.com">
              denis@gushcha.com
            </Contact>
          </p>
          <p>
            <Contact type={ContactType.LinkedIn} value="https://www.linkedin.com/in/denis-gushcha-442469295/">
              {t('linkedin')}
            </Contact>
            <Contact type={ContactType.Website} value="https://denis.gushcha.com">
              {t('denis_gushcha_com')}
            </Contact>
          </p>
          <p>{t('location_limassol')}</p>
        </section>
      </Block>
      <Block>
        <section>
          <Heading className="hidden" level={2}>{t('profile')}</Heading>
          <p>{t('profile_text')}</p>
        </section>
      </Block>

      <section>
        <Block isContrast>
          <Heading level={2}>{t('work_experience')}</Heading>
          <div>
            <Heading level={3}>{t('engineering_lead_payments')}</Heading>
            <p><strong>{t('confidential_igaming')}</strong></p>
            <p>{t('sep_2022_present')}</p>
            <p><em>{t('payments_infra_description')}</em></p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>{t('engineering_leadership')}</strong> {t('engineering_leadership_desc')}</li>
              <li><strong>{t('technical_strategy')}</strong> {t('technical_strategy_desc')}</li>
              <li><strong>{t('system_reengineering')}</strong> {t('system_reengineering_desc')}</li>
              <li><strong>{t('operational_complexity')}</strong> {t('operational_complexity_desc')}</li>
              <li><strong>{t('cross_functional_coord')}</strong> {t('cross_functional_coord_desc')}</li>
              <li><strong>{t('process_ownership')}</strong> {t('process_ownership_desc')}</li>
              <li><strong>{t('ai_tooling_adoption')}</strong> {t('ai_tooling_adoption_desc')}</li>
            </ul>
          </div>
        </Block>
        <Block>
          <div>
            <Heading level={3}>{t('senior_frontend_developer')}</Heading>
            <p><strong>{t('headhunter_talantix_ats')}</strong></p>
            <p>{t('mar_2020_aug_2022')}</p>
            <p><em>{t('ats_b2b_description')}</em></p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>{t('hh_mentorship_desc')}</li>
              <li>{t('hh_design_system_desc')}</li>
              <li>{t('hh_graphql_desc')}</li>
              <li>{t('hh_ab_testing_desc')}</li>
            </ul>
          </div>
        </Block>
        <Block isContrast>
          <div>
            <Heading level={3}>{t('frontend_tech_lead')}</Heading>
            <p><strong>{t('inex_period')}</strong></p>
            <p><em>{t('railway_description')}</em></p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>{t('inex_team_leadership_desc')}</li>
              <li>{t('inex_food_delivery_desc')}</li>
              <li>{t('inex_architecture_desc')}</li>
            </ul>
          </div>
        </Block>
        <Block>
          <div>
            <Heading level={3}>{t('software_integration_specialist')}</Heading>
            <p><strong>{t('computel_period')}</strong></p>
            <p><em>{t('computel_description')}</em></p>
          </div>
        </Block>
      </section>

      <section>
        <Block isContrast>
          <div>
            <Heading level={2}>{t('education')}</Heading>
            <Heading level={4}>{t('msc_applied_mathematics')}</Heading>
            <p>{t('miem_period')}</p>
            <p>{t('miem_description')}</p>
          </div>
        </Block>
      </section>

      <section>
        <Block>
          <div>
            <Heading level={2}>{t('skills')}</Heading>
            <ul className="list-none mt-2 space-y-1">
              <li><strong>{t('engineering_label')}: </strong>{t('engineering_skills_value')}</li>
              <li><strong>{t('platforms_label')}: </strong>{t('platforms_value')}</li>
              <li><strong>{t('other_skills_label')}: </strong>{t('other_skills_value')}</li>
            </ul>
          </div>
        </Block>
      </section>
    </main>
  )
}

export default withLocalizationPage(CvPage)
