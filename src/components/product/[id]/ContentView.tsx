import { Item } from '@/app/product/page';
import { InfoTableItem } from '@/app/product/[id]/page';
import { Dispatch, SetStateAction } from 'react';
import Overview from '@/components/product/[id]/Overview';
import Detail from '@/components/product/[id]/Detail';
import { TabData } from '@/components/shared/Tabs';

export type Props = {
  data: Item;
  info: InfoTableItem[];
  setInfo: Dispatch<SetStateAction<InfoTableItem[]>>;
  tabData: TabData;
  setTabData: Dispatch<SetStateAction<TabData>>;
};

const ContentView = ({ data, info, setInfo, tabData, setTabData }: Props) => {
  return (
    <>
      <div className="content-view w-3/4 flex flex-col pt-4">
        <Overview data={data} info={info} setInfo={setInfo} />
        <Detail tabData={tabData} setTabData={setTabData} />
      </div>
    </>
  );
};

export default ContentView;
