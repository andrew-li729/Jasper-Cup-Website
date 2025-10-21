def ms_to_hms(ms: int) -> str:
    hours = ms // 3600000
    minutes = (ms % 3600000) // 60000
    seconds = (ms % 60000) // 1000
    milliseconds = ms % 1000
    return f"{hours}:{minutes:02d}:{seconds:02d}.{milliseconds:03d}"
