from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in userwise_naming_series/__init__.py
from userwise_naming_series import __version__ as version

setup(
	name="userwise_naming_series",
	version=version,
	description="User Naming Series",
	author="Laxman",
	author_email="laxmantandon@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
