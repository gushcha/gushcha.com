import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'
import { getT } from '@/hooks/useT/getT'

const CvPage: PageWithLocale = async () => {
  const t = await getT('cv')

  return (
    <article>
      <div>
        <h1>{t('denis_gushcha')}</h1>
        <p>
          <strong>{t('senior_frontend_developer_team')}</strong>
        </p>
        <p>{t('nine_years_of_total')}<br />{t('ready_for_relocation')}</p>
      </div>

      <div>
        <h2>{t('contacts')}</h2>
        <p>
          ✉️ <a href="mailto:denis.gushcha@gmail.com">{t('denis_gushcha_com_2')}</a>
        </p>
        <p>
          💬 <a href="https://t.me/ootconose">{t('telegram')}</a>
        </p>
        <p>
          🐙 <a href="https://github.com/gushcha/">{t('github')}</a>
          💼 <a href="https://www.linkedin.com/in/denis-gushcha-442469295/">{t('linkedin')}</a>
          🌐 <a href="http://denis.gushcha.com">{t('denis_gushcha_com')}</a>
        </p>
      </div>

      <div>
        <h2>{t('technology')}</h2>
        <p>
          <strong>{t('ts_react_vue')}</strong>{t('possible_python')}</p>
      </div>

      <div>
        <h2>{t('work_experience')}</h2>

        <div>
          <h3>{t('team_leader')}</h3>
          <p>
            <strong>{t('nda_protected_cyprus_sept')}</strong>
          </p>
          <p>
            <strong>{t('product')}</strong>{t('payment_system_for_betting')}</p>
          <strong>{t('responsibilities')}</strong>
          <ul>
            <li>{t('translating_business_requests_into')}</li>
            <li>{t('fostering_effective_teamwork')}</li>
            <li>{t('building_productive_cooperation_with')}</li>
            <li>{t('coding_nuxt_js_reviewing')}</li>
          </ul>
          <strong>{t('key_achievements')}</strong>
          <ul>
            <li>{t('fully_re_engineered_deposit')}</li>
            <li>{t('developed_an_admin_panel')}</li>
            <li>{t('formed_two_self_sufficient')}</li>
          </ul>
        </div>

        <div>
          <h3>{t('senior_frontend_developer')}</h3>
          <p>
            <strong>{t('headhunter_group_plc_mar')}</strong>
          </p>
          <p>
            <strong>{t('product')}</strong>{t('ats_system')}<a>{t('talantix')}</a>{t('built_within_largest_russian')}<a>{t('hh_ru')}</a>
          </p>
          <strong>{t('responsibilities')}</strong>
          <ul>
            <li>{t('ats_system_frontend_development')}</li>
            <li>{t('technical_application_design')}</li>
            <li>{t('code_review')}</li>
            <li>{t('growth_hacking')}</li>
            <li>{t('mentoring_talents_development')}</li>
            <li>{t('team_process_improvement_team')}</li>
          </ul>
        </div>

        <div>
          <h3>{t('lead_frontend_developer')}</h3>
          <p>
            <strong>{t('inex_ltd_nov_2016')}</strong>
          </p>
          <p>
            <strong>{t('product')}</strong>{t('official_russian_railway_portal')}<a>{t('rzd_ru')}</a>
          </p>
          <strong>{t('responsibilities')}</strong>
          <ul>
            <li>{t('website_frontend_development_vue')}</li>
            <li>{t('lead_of_frontend_department')}</li>
            <li>{t('candidates_interviewing_hiring')}</li>
            <li>{t('mentoring')}</li>
          </ul>
        </div>

        <div>
          <h3>{t('software_integration_specialist')}</h3>
          <p>
            <strong>{t('computel_system_management_ltd')}</strong>
          </p>
          <p>
            <strong>{t('service')}</strong>{t('corporate_identity_related_software')}</p>
          <p>
            <strong>{t('responsibilities')}</strong>
          </p>
          <ul>
            <li>{t('integration_of_ibm_identity')}</li>
            <li>{t('technical_support_for_system')}</li>
            <li>{t('technical_documenting_e_g')}</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>{t('startups_and_pet_projects')}</h2>

        <div>
          <h3>{t('upplook')}</h3>
          <p>
            <strong>{t('product')}</strong>{t('social_network_for_stylists')}</p>
          <ul>
            <li>{t('developed_frontend_app_backbone')}</li>
            <li>{t('partial_backend_app_development')}</li>
          </ul>
        </div>

        <div>
          <h3>{t('treebo_io')}</h3>
          <p>
            <strong>{t('product')}</strong>{t('web_platform_for_creating')}</p>
          <ul>
            <li>{t('created_technical_design_and')}</li>
            <li>{t('developed_prototype_of_frontend')}</li>
            <li>{t('developed_prototype_of_telegram')}</li>
            <li>{t('participated_in_startup_pitches')}</li>
          </ul>
        </div>

        <div>
          <h3>{t('unpacked_club')}</h3>
          <p>
            <strong>{t('product')}</strong>{t('personal_enthusiastic_project_network')}</p>
          <ul>
            <li>{t('developed_alpha_version_of')}</li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h2>{t('education')}</h2>
          <ul>
            <li>
              <strong>{t('hse_moscow_institute_of')}</strong>{t('sept_2007_jul_2012')}</li>
            <li>
              <strong>{t('department')}</strong>{t('applied_mathematics')}</li>
            <li>
              <strong>{t('obtained_qualification')}</strong>{t('engineer_mathematician_specialist')}</li>
          </ul>
        </div>

        <div>
          <h2>{t('languages')}</h2>
          <ul>
            <li>
              <strong>{t('russian')}</strong>{t('native_speaker')}</li>
            <li>
              <strong>{t('english')}</strong>{t('advanced_spoken_written')}</li>
            <li>
              <strong>{t('greek')}</strong> A1
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2>{t('about_me')}</h2>
        <p>{t('motivated_by_projects_led')}</p>
        <p>{t('i_believe_that_developers')}</p>
      </div>
    </article>
  )
}

export default withLocalization(CvPage)