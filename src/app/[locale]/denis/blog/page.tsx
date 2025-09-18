import { withLocalization } from '@/components/shared/withLocalization/withLocalization'
import { PageWithLocale } from '@/types/PageWithLocale'


const PageBlog: PageWithLocale = async () => {
  return (
    <main>
      <h1>Denis Blog</h1>
    </main>
  )
}

export default withLocalization(PageBlog)