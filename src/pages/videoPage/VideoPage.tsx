import TopBar from "@/components/topBar/TopBar";
import { AbsoluteCenter, Card, Container, IconButton, ProgressCircle, Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import data from "@/data/mockedData.json";
import { useCallback, useRef, useState } from "react";
import ReactPlayer from 'react-player';
import { Play, Video } from "lucide-react";

const courses = data.flatMap(({ courses }) => courses);

function VideoPage() {
  const { course_id } = useParams();
  const selectedCourse = courses.find(({ id }) => id === course_id);

  const [classes, setClasses] = useState(selectedCourse?.classes.map((item) => ({ ...item, progress: 0 })));
  const [progress, setProgress] = useState<number>(0);
  const [currentClass, setCurrentClass] = useState(classes?.[0]);
  const [showThumb, setShowThumb] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<number>(null);

  const trackProgress = useCallback(() => {
    const duration = videoRef.current?.duration ?? 0;
    if (currentClass && videoRef.current && currentClass?.progress > 0 && currentClass?.progress < 100) {
      videoRef.current.currentTime = duration * (currentClass.progress / 100);
    }
    intervalRef.current = setInterval(() => {
      setProgress((prevState) => prevState + 1);
    }, duration * 10);
  }, [videoRef, currentClass]);

  function handleNextClass(videoInfo: { title: string; video: string; thumbnail: string; progress: number }) {
    setClasses(prevState => prevState?.map((item) => {
      if (item.title === currentClass?.title) {
        return ({ ...item, progress })
      }
      return item;
    }));
    setCurrentClass(videoInfo);
    setShowThumb(true);
    setProgress(videoInfo.progress >= 100 ? 0 : videoInfo.progress);
    intervalRef.current && clearInterval(intervalRef.current);
  }

  function handleVideoEnd() {
    const currentVideoIndex = classes?.findIndex(({ title }) => title === currentClass?.title);
    if (currentVideoIndex !== undefined && classes) {
      handleNextClass(classes[currentVideoIndex + 1])
    }
  }

  return (
    <Container style={{ height: '100vh' }}>
      <TopBar />
      <Container style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', height: '80vh' }}>
        <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', backgroundColor: '#000' }}>
          <ReactPlayer
            key={currentClass?.title}
            ref={videoRef}
            controls
            src={currentClass?.video}
            style={{ width: '100%', height: '100%' }}
            onPlay={trackProgress}
            onEnded={handleVideoEnd}
            onPause={() => {
              intervalRef.current && clearInterval(intervalRef.current)
            }} />
          {showThumb && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              backgroundImage: `url(${currentClass?.thumbnail})`,
              backgroundSize: 'cover'
            }}>
              <IconButton
                variant="ghost"
                size="2xl"
                style={{ width: '8rem', height: '8rem', borderRadius: '1rem' }}
                onClick={() => {
                  videoRef.current?.play();
                  setShowThumb(false);

                }}><Play style={{ width: '5rem', height: '5rem' }} /></IconButton>
            </div>

          )}
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '20px', gap: '12px' }}>
          {classes?.map((videoInfo) =>
            <Card.Root
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                padding: 10,
                cursor: 'pointer',
                opacity: currentClass?.title === videoInfo.title ? 1 : 0.6,
                transition: 'all 150ms linear',
              }}
              _hover={{
                opacity: '1!important',
                border: '1px solid rgba(125, 231, 121, 0.77)',
              }}
              onClick={() => handleNextClass(videoInfo)}>
              <ProgressCircle.Root value={videoInfo.title === currentClass?.title ? progress : videoInfo.progress}>
                <ProgressCircle.Circle style={{ position: 'relative' }} css={{ "--thickness": "3px" }} colorPalette={videoInfo.progress >= 100 ? 'green' : undefined}>
                  <ProgressCircle.Range />
                </ProgressCircle.Circle>
                <AbsoluteCenter>
                  <div
                    style={{
                      ...(videoInfo.progress === 0 && videoInfo.title !== currentClass?.title && {
                        border: '1px solid #444',
                        borderRadius: '100%',
                        padding: '0.7rem'
                      })
                    }}>
                    <Video size={18} />
                  </div>
                </AbsoluteCenter>
              </ProgressCircle.Root>
              <Text>{videoInfo.title}</Text>
            </Card.Root>)}
        </div>
      </Container>
    </Container>
  )
}

export default VideoPage;