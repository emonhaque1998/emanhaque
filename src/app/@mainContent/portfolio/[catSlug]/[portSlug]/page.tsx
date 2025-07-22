"use client";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import MainContainer from "@/components/MainContainer";
import TopDivision from "@/components/TopDivision";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addSignlePortfolio } from "@/store/portfolioSlice";
import BossLoading from "@/components/BossLoading";

export default function ({
  params,
}: {
  params: Promise<{ portSlug: string; catSlug: string }>;
}) {
  const { portSlug, catSlug } = use(params);
  const portfolio = useAppSelector(
    (state) => state.portfolioSlice.singlePortfolio
  );
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/api/portfolio/${catSlug}/${portSlug}`);
      dispatch(addSignlePortfolio(res.data));
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
        <>
          <TopDivision>
            <MainContainer>
              {portfolio && (
                <>
                  <div className="flex flex-row gap-20 w-full">
                    <div>
                      <h3>Status:</h3>
                      <span className="text-gray-500">{portfolio.status}</span>
                    </div>
                    <div>
                      <h3>Client Name:</h3>
                      <span className="text-gray-500">
                        {portfolio.clientName}
                      </span>
                    </div>
                    <div>
                      <h3>Location:</h3>
                      <span className="text-gray-500">
                        {portfolio.location}
                      </span>
                    </div>
                  </div>
                  <HorizontalRowDotted />
                  <div
                    className="custom-tiptap-output flex flex-col justify-center gap-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        portfolio && portfolio.content ? portfolio.content : "",
                    }}
                  />
                </>
              )}
            </MainContainer>
          </TopDivision>
        </>
      )}
    </>
  );
}
