import React from 'react';
import {
  Card as ReactStrapCard,
  CardHeader,
  CardBody,
  CardTitle,
} from 'reactstrap';

interface ICard{
    dropdown?: JSX.Element;
    classname?: string;
    desc?:    string;
    title?:  string;
    icon?:   string;
    component?: JSX.Element;
}

function Card({dropdown,classname,desc,title,icon,component}:ICard) {
  return (
    <>
      <ReactStrapCard className={classname}>
        <CardHeader>
          <span className="pull-left">{dropdown}</span>
          <h5 className="card-category">{desc}</h5>
          <CardTitle tag="h3">
          <i className={icon} />
            {title}
          </CardTitle>
        </CardHeader>
        <CardBody>
          {component}
        </CardBody>
      </ReactStrapCard>
    </>
  );
}

export default Card;
