import SectionHeading from '../../../components/SectionHeading'
import SingleFAQArea from './SingleFAQArea'
import IcoCounter from './IcoCounter'
import IcoDocs from './IcoDocs'

const SecFAQ_Timeline = ({FQAInfo , DocElementTitle}) => {

  return (
    <section className="faq-timeline-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7 col-md-12">
                    <SectionHeading
                        title='Frequently Asked Questions'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
                    />

                    <div className="dream-faq-area">
                        <dl>
                            {FQAInfo && FQAInfo.map((item , key) => (
                                <SingleFAQArea key={key} text={item.text} />
                            ))}
                        </dl>
                    </div>
                </div>

                <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">

                    <IcoCounter />

                    <IcoDocs data={DocElementTitle} />
                    
                </div>
            </div>
        </div>
    </section>
  );
}

export default SecFAQ_Timeline;