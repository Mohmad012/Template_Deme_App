const Demo = ({img , path}) => {

  return (
      <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="demo-item">
              <a href={path} target="_blank" rel="noopener noreferrer"><img src={img} alt="demo" className="img-responsive" /></a>
              <div className="preview-btn-wrapper text-center">
                  <a href={path} target="_blank" rel="noopener noreferrer" className="preview-demo">View demo <i className="fa fa-long-arrow-right"></i></a>
              </div>
          </div>
      </div>

  );
}

export default Demo;
