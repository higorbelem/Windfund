/* eslint-disable @typescript-eslint/no-unused-vars */

import colors from '#/static/colors';
import React, {useMemo, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View as AnimatedView} from 'react-native-animatable';
import Octicons from 'react-native-vector-icons/Octicons';

import Text from '../Text';
import styles from './styles';

export interface ModalProps {
  text?: string;
}

let open = (alert?: ModalProps): (() => void) => {
  return () => {};
};
let handleClose = () => {};

const Modal = () => {
  const alertRef = useRef<any>();
  const backRef = useRef<any>();
  const [messages, setMessages] = useState<ModalProps[]>([]);

  open = (alert?: ModalProps) => {
    setMessages([...messages, {...alert}]);
    return handleClose;
  };

  handleClose = () => {
    backRef?.current?.fadeOut(400);
    alertRef?.current
      ?.fadeOutDownBig(400)
      .then(() => setMessages(prev => prev.slice(0, -1)));
  };

  const hasAlert = useMemo(() => !!messages.length, [messages]);

  const alert: ModalProps = useMemo(
    () => messages[messages.length - 1],
    [messages],
  );

  if (!hasAlert) {
    return null;
  }

  return (
    <AnimatedView
      data-test="bottom-modal"
      style={styles.container}
      ref={backRef}
      animation="fadeIn"
      duration={400}>
      <TouchableOpacity style={styles.back} activeOpacity={1} />

      <AnimatedView
        ref={alertRef}
        animation="fadeInUpBig"
        duration={400}
        style={styles.modal}>
        <Octicons name="check-circle" size={40} color={colors.green} />

        <Text style={styles.text}>
          {alert?.text ?? 'Registered successfully'}
        </Text>
      </AnimatedView>
    </AnimatedView>
  );
};

export default {
  Component: Modal,
  open: (alert?: ModalProps): (() => void) => open(alert),
  close: () => handleClose(),
};
