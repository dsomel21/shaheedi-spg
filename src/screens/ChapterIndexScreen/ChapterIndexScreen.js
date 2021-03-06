import React, { useEffect, useState, useContext } from 'react';
import Styles from './ChapterIndexScreenStyle.module.css';
import Grid from '../../components/Grid';
import ChapterListStyles from '../../components/ChapterList/ChapterList.module.css';
import { fetchGet } from '../../helper/fetchHelper';
import ChapterList from '../../components/ChapterList';
import { Link } from 'react-router-dom';
import CornerButton from '../../components/CornerButton';
import CornerButtonStyles from '../../components/CornerButton/CornerButtonStyles.module.css';
import { Context as ThemeContext } from '../../context/ThemeContext';

const ChapterIndexScreen = () => {
  const { state: themeState } = useContext(ThemeContext);
  const isDarkMode = themeState.currentTheme === 'DARK';
  const [chamkaurChapters, setChamkaurChapters] = useState(null);

  useEffect(() => {
    const fetchChamkaurChapters = async () => {
      const res = await fetchGet('/chamkaur');
      setChamkaurChapters(res.chapters);
    };
    fetchChamkaurChapters();
  }, []);

  return (
    <>
      <Grid
        alignItems="center"
        justify="center"
        customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
      >
        <Grid column={true} sm={12} md={12} lg={10}>
          <Grid alignItems="center" justify="center">
            <Grid column={true} sm={12} md={12} lg={10}>
              <h3 className={Styles.PageTitle}>Rut 6 - Chapters</h3>
            </Grid>

            {/* ChapterLists (X-Scroll on Mobile) */}
            <Grid
              column={true}
              sm={12}
              md={12}
              lg={10}
              customClass={isDarkMode ? `${Styles.DarkMode}` : ''}
            >
              <Grid
                alignItems="baseline"
                justify="flex-start"
                customClass={ChapterListStyles.Flow}
              >
                <ChapterList chapters={chamkaurChapters} />
              </Grid>
            </Grid>
          </Grid>

          {/* Only Show Button When Chapters Have Loaded */}
          {chamkaurChapters?.length > 0 && (
            <Grid
              alignItems="center"
              justify="center"
              customClass={ChapterListStyles.ButtonContainer}
            >
              <Grid column={true} sm={12} md={12} lg={10}>
                <Link to={`/`}>
                  <button
                    className={`${CornerButtonStyles.Orange} ${CornerButtonStyles.BottomLeft}`}
                  >
                    Home
                  </button>
                </Link>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ChapterIndexScreen;
