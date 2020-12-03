import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Redux Thunk 함수
import {getDataThunk} from '../store/action/dataReducer';

// 최기프
import HumidChartContainer from '../containers/HumidChartContainer';
import TempChartContainer from '../containers/TempChartContainer';
import DataListContainer from '../containers/DataListContainer';
import Card from '../components/Common/Card';
import Humid from '../components/Humid';
import Temperature from '../components/Temperature';
import Image from '../components/Image';
import Introduce from '../components/Introduce';

// ReactStrap
import {
  Container,
  Col,
  Row,
} from 'reactstrap';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 페이지에 필요한 API dispatch하는 함수
    const getApis = async () => {
      dispatch(getDataThunk());
    };
    getApis();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="4">
          <Card
            desc="Service Introduce"
            title="&nbsp;KHU-NOIN"
            icon="tim-icons icon-badge"
            component={<Introduce/>}
          />
          <Card
            desc="Current Photos"
            title="&nbsp;모듈 촬영 사진"
            icon="tim-icons icon-image-02"
            component={<Image />}
          />
        </Col>
        <Col md="4">
          <Card
            desc="Current Temperature"
            // title="현재 온도 : 26°C"
            component={<Temperature/>}
          />
          <Card
            desc="Temperature Chart"
            title="&nbsp;실시간 온도 차트"
            icon="tim-icons icon-sound-wave"
            component={<TempChartContainer />}
          />
        </Col>
        <Col md="4">
          {/* 과제용 와이어 프레임을 위해 하드코딩 하여 만든 카드 -정산 내역 & 시설 관리*/}
          <Card
            desc="Current Humidity"
            // title="현재 습도"
            component={<Humid/>}
          />
          <Card
            desc="Exact Calculation"
            title="&nbsp;실시간 습도 차트"
            icon="tim-icons icon-sound-wave"
            component={<HumidChartContainer />}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            desc="Data List"
            title="&nbsp;데이터 리스트"
            icon="tim-icons icon-bullet-list-67"
            component={<DataListContainer />}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
