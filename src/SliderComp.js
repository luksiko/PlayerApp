import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import TrackPlayer, { useProgress } from 'react-native-track-player'

export default function SliderComp() {
	const { position, duration } = useProgress()

	const formatTime = secs => {
		let minutes = Math.floor(secs / 60)
		let seconds = Math.ceil(secs - minutes * 60)
		if (seconds < 10) seconds = `0${seconds}`
		return `${minutes}:${seconds}`
	}

	const handleChange = val => {
		TrackPlayer.seekTo(val)
	}

	return (
		<View style={styles.container}>
			<Slider
				style={{ width: 340, height: 40 }}
				minimumValue={0}
				maximumValue={duration}
				value={position}
				minimumTrackTintColor='#030303'
				maximumTrackTintColor='#000000'
				thumbTintColor='green'
				onSlidingComplete={handleChange}
			/>
			<View style={styles.timerContainer}>
				<Text style={styles.timers}>{formatTime(position)}</Text>
				<Text style={styles.timers}>{formatTime(duration)}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 70,
	},
	timerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	timers: {
		color: 'black',
		fontSize: 16,
	},
})
