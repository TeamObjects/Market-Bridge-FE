/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Tabs, { TabData } from '@/components/shared/Tabs';
import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

export type Props = {
  tabData: TabData;
  setTabData: Dispatch<SetStateAction<TabData>>;
};

const DescriptionView = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div
      ref={ref}
      className="description border-t flex flex-col justify-center items-center"
    >
      <div className="img">
        <Image
          src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg"
          alt="description-image"
          width={400}
          height={500}
        />
      </div>
      <div className="text w-3/4 my-4">
        What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32.The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
      </div>
    </div>
  );
});
DescriptionView.displayName = 'DescriptionView';

const DetailView = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div
      ref={ref}
      className="detail border-t flex flex-col justify-center items-center"
    >
      <div className="img">
        <Image
          src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg"
          alt="detail-image"
          width={400}
          height={500}
        />
      </div>
      <div className="text w-3/4 my-4">
        What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32.The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
      </div>
      <div className="img">
        <Image
          src="https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/retail/images/557121001125370-b6bc4b76-dcde-4915-8a74-542f8a5a4a14.jpg"
          alt="detail-image"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
});
DetailView.displayName = 'DetailView';

const ReviewView = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div ref={ref} className="border-t">
      ReviewView
    </div>
  );
});

ReviewView.displayName = 'ReviewView';

const QnaView = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <div ref={ref} className="border-t">
      QnaView
    </div>
  );
});
QnaView.displayName = 'QnaView';

const Detail = ({ tabData, setTabData }: Props) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const qnaRef = useRef<HTMLDivElement>(null);

  // TODO: @react-hook/event useEvent사용??
  const [isReachedTop, setIsReachedTop] = useState(false);

  // TODO: useEffect, useCallback, window와의 관계에 대한 고민
  const handleScroll = () => {
    if (tabsRef.current) {
      const rect = tabsRef.current.getBoundingClientRect();
      setIsReachedTop(rect.y <= 0);
    }
    if (
      descriptionRef.current &&
      detailRef.current &&
      reviewRef.current &&
      qnaRef.current
    ) {
      const description = descriptionRef.current.getBoundingClientRect();
      const detail = detailRef.current.getBoundingClientRect();
      const review = reviewRef.current.getBoundingClientRect();
      const qna = qnaRef.current.getBoundingClientRect();

      const currentTab = (() => {
        if (description.y < 0 &&
          detail.y > 0 &&
          review.y > 0 &&
          qna.y > 0) return "description";
        else if (description.y < 0 &&
          detail.y < 0 &&
          review.y > 0 &&
          qna.y > 0) return "detail";
        else if (description.y < 0 &&
          detail.y < 0 &&
          review.y < 0 &&
          qna.y > 0) return "review";
        else if (description.y < 0 &&
          detail.y < 0 &&
          review.y < 0 &&
          qna.y < 0) return "qna";
        else return undefined;
      })();
      if (currentTab && tabData.value !== currentTab) {
        setTabData({ ...tabData, value: currentTab })
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }; //clean up
  }, [isReachedTop, descriptionRef, detailRef, reviewRef, qnaRef, handleScroll]);

  return (
    <>
      <div ref={tabsRef} className={isReachedTop ? 'relative mt-10' : 'mt-10'}>
        <div className={isReachedTop ? 'sticky top-0' : ''}>
          <Tabs
            value={tabData.value}
            options={tabData.options}
            onChange={(value) => setTabData({ ...tabData, value: value })}
          />
        </div>
        <div className="container flex flex-col">
          <DescriptionView ref={descriptionRef} />
          <DetailView ref={detailRef} />
          <ReviewView ref={reviewRef} />
          <QnaView ref={qnaRef} />
        </div>
      </div>
    </>
  );
};

export default Detail;
