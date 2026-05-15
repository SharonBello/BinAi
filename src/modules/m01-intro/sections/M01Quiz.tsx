// M01Quiz — 02:25–45 | בחינת ידע
import React, { useState } from 'react';
import { m01Quiz } from '../data/quiz';
import styles from '../m01.module.scss';

interface Props { onNext: () => void; accentColor: string; }

const M01Quiz: React.FC<Props> = ({ onNext, accentColor }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = m01Quiz.questions;

  const select = (qid: string, aid: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qid]: aid }));
  };

  const answeredCount = Object.keys(answers).length;

  const score = submitted
    ? Math.round(
      questions.filter(q => answers[q.id] === q.correctId).length
      / questions.length * 100
    )
    : 0;

  const passed = score >= m01Quiz.passingScore;

  return (
    <div className={styles.section} dir="rtl">
      <div className={styles.sectionHeader}>
        <span className={styles.timer}>⏱ 02:25 – 02:45</span>
        <h2 className={styles.sectionTitle}>בחינת ידע — מהו AI?</h2>
      </div>

      {!submitted ? (
        <>
          <p className={styles.quizIntro}>
            {answeredCount}/{questions.length} שאלות נענו
          </p>
          <div className={styles.quizProgress}>
            <div
              className={styles.quizProgressBar}
              style={{
                width: `${answeredCount / questions.length * 100}%`,
                background: accentColor,
              }}
            />
          </div>

          {questions.map((question, idx) => (
            <div key={question.id} className={styles.quizQuestion}>
              <p className={styles.quizQText}>
                <span className={styles.quizQNum} style={{ color: accentColor }}>
                  {idx + 1}.
                </span>
                {question.textHe}
              </p>
              <div className={styles.quizOptions}>
                {question.options.map(opt => (
                  <button
                    key={opt.id}
                    className={[
                      styles.quizOption,
                      answers[question.id] === opt.id ? styles.quizOptionSelected : '',
                    ].join(' ')}
                    style={
                      answers[question.id] === opt.id
                        ? { borderColor: accentColor, background: accentColor + '10' }
                        : {}
                    }
                    onClick={() => select(question.id, opt.id)}
                  >
                    <span className={styles.quizOptLabel}>{opt.id}.</span>
                    {opt.textHe}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className={styles.nextBtn}
            style={{
              background: answeredCount === questions.length ? accentColor : '#C8C0B8',
            }}
            onClick={() => setSubmitted(true)}
            disabled={answeredCount < questions.length}
          >
            הגש ←
          </button>
        </>
      ) : (
        <div className={styles.quizResults}>
          <div
            className={styles.scoreCircle}
            style={{
              borderColor: passed ? accentColor : '#E24B4A',
              color: passed ? accentColor : '#E24B4A',
            }}
          >
            <span className={styles.scoreVal}>{score}%</span>
            <span className={styles.scoreLbl}>{passed ? '✓ עברתם' : 'נסו שוב'}</span>
          </div>

          {questions.map((question, idx) => {
            const correct = answers[question.id] === question.correctId;
            return (
              <div
                key={question.id}
                className={[
                  styles.quizReview,
                  correct ? styles.correct : styles.incorrect,
                ].join(' ')}
              >
                <p className={styles.quizReviewQ}>
                  <span style={{ color: correct ? '#1D9E75' : '#E24B4A' }}>
                    {correct ? '✓' : '✗'}
                  </span>
                  {' '}{idx + 1}. {question.textHe}
                </p>
                {!correct && (
                  <p className={styles.quizCorrectAns}>
                    התשובה הנכונה:{' '}
                    <strong>
                      {question.options.find(o => o.id === question.correctId)?.textHe}
                    </strong>
                  </p>
                )}
                <p className={styles.quizExplanation}>{question.explanationHe}</p>
              </div>
            );
          })}

          <button
            className={styles.nextBtn}
            style={{ background: accentColor }}
            onClick={onNext}
          >
            סיכום ותיק עבודות ←
          </button>
        </div>
      )}
    </div>
  );
};

export default M01Quiz;